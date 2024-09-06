

export interface MarkeAction {
    symbol: string;
    currentprice: number;
    todayleft: number;
    todayright: number;
    change: number;
    prevclose: number;
    volume: string;
    updown: boolean;
}



// export interface IndiaMarketData {
//     name: string;
//     value: number;
//     change: number;
//     changePercentage: number;
//     isOpen: boolean;
//   }
  
//  export interface IndiaMarketComponentProps {
//     usIndices: IndiaMarketData[];
//     europeanIndices: IndiaMarketData[];
//     asianIndices: IndiaMarketData[];
//   }