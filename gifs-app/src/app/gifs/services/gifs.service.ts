import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GifResponse, Gif } from 'src/app/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history : string[] = JSON.parse(localStorage.getItem("history") || "[]");
  private _apiKey : string = '8J7EkAgXQMR6lludkdxM6oQ9J00Ubnhf';
  private _serviceUrl : string = 'https://api.giphy.com/v1/gifs'
  public response : Gif[] = JSON.parse(localStorage.getItem("result") || "[]");

  constructor( private http : HttpClient) { }

  get history() : string[] {
    return [...this._history]
  }

  search(query : string) : void{
    query = query.trim()
    if(query){
      const params = new HttpParams()
        .set('api_key', this._apiKey)
        .set('q', query)
        .set('limit', 10)
      
      this.addHistory(query);
      this.http.get<GifResponse>(`${this._serviceUrl}/search`, {params})
        .subscribe((res : GifResponse) => {
          this.response = res.data
          localStorage.setItem("result", JSON.stringify(this.response))
        })
    }

  }

  public addHistory(query : string) : void {
    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.slice(0,10);

      localStorage.setItem("history", JSON.stringify(this._history))
    }
  }
}
