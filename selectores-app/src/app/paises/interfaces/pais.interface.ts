export interface Pais {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag?:        string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    EUR?: Aed;
    SEK?: Aed;
    XPF?: Aed;
    XOF?: Aed;
    BAM?: BAM;
    JOD?: Aed;
    USD?: Aed;
    DKK?: Aed;
    IRR?: Aed;
    LSL?: Aed;
    ZAR?: Aed;
    MGA?: Aed;
    MUR?: Aed;
    SZL?: Aed;
    SBD?: Aed;
    MWK?: Aed;
    BWP?: Aed;
    DJF?: Aed;
    XAF?: Aed;
    BBD?: Aed;
    ANG?: Aed;
    RWF?: Aed;
    GBP?: Aed;
    JEP?: Aed;
    YER?: Aed;
    BRL?: Aed;
    DZD?: Aed;
    KZT?: Aed;
    FJD?: Aed;
    PKR?: Aed;
    SHP?: Aed;
    GEL?: Aed;
    NAD?: Aed;
    NOK?: Aed;
    AUD?: Aed;
    CHF?: Aed;
    INR?: Aed;
    HKD?: Aed;
    XCD?: Aed;
    COP?: Aed;
    IQD?: Aed;
    MAD?: Aed;
    LYD?: Aed;
    SLL?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    HRK?: Aed;
    TMT?: Aed;
    BTN?: Aed;
    JPY?: Aed;
    MOP?: Aed;
    SYP?: Aed;
    GMD?: Aed;
    FOK?: Aed;
    CAD?: Aed;
    EGP?: Aed;
    PGK?: Aed;
    CZK?: Aed;
    BHD?: Aed;
    UZS?: Aed;
    HUF?: Aed;
    ZMW?: Aed;
    THB?: Aed;
    MKD?: Aed;
    SOS?: Aed;
    RUB?: Aed;
    BIF?: Aed;
    ILS?: Aed;
    MYR?: Aed;
    TZS?: Aed;
    KWD?: Aed;
    NGN?: Aed;
    CVE?: Aed;
    AOA?: Aed;
    PEN?: Aed;
    GHS?: Aed;
    MZN?: Aed;
    KID?: Aed;
    PYG?: Aed;
    BZD?: Aed;
    AMD?: Aed;
    AED?: Aed;
    PLN?: Aed;
    BOB?: Aed;
    CLP?: Aed;
    BDT?: Aed;
    MXN?: Aed;
    MNT?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    AFN?: Aed;
    UYU?: Aed;
    BYN?: Aed;
    CDF?: Aed;
    MRU?: Aed;
    GIP?: Aed;
    AZN?: Aed;
    HTG?: Aed;
    DOP?: Aed;
    SGD?: Aed;
    ARS?: Aed;
    ISK?: Aed;
    JMD?: Aed;
    QAR?: Aed;
    OMR?: Aed;
    RON?: Aed;
    TTD?: Aed;
    MVR?: Aed;
    SSP?: Aed;
    AWG?: Aed;
    FKP?: Aed;
    STN?: Aed;
    PAB?: Aed;
    ALL?: Aed;
    HNL?: Aed;
    KPW?: Aed;
    KES?: Aed;
    LKR?: Aed;
    LBP?: Aed;
    KMF?: Aed;
    TWD?: Aed;
    KYD?: Aed;
    NIO?: Aed;
    BGN?: Aed;
    TVD?: Aed;
    LAK?: Aed;
    BND?: Aed;
    GGP?: Aed;
    NPR?: Aed;
    CRC?: Aed;
    KHR?: Aed;
    SAR?: Aed;
    GNF?: Aed;
    ERN?: Aed;
    KRW?: Aed;
    RSD?: Aed;
    TOP?: Aed;
    VES?: Aed;
    KGS?: Aed;
    SDG?: BAM;
    UAH?: Aed;
    VUV?: Aed;
    BMD?: Aed;
    TND?: Aed;
    IDR?: Aed;
    UGX?: Aed;
    IMP?: Aed;
    MMK?: Aed;
    CNY?: Aed;
    SCR?: Aed;
    ZWL?: Aed;
    ETB?: Aed;
    GTQ?: Aed;
    LRD?: Aed;
    MDL?: Aed;
    SRD?: Aed;
    BSD?: Aed;
    VND?: Aed;
    WST?: Aed;
    TJS?: Aed;
    PHP?: Aed;
    GYD?: Aed;
    TRY?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

