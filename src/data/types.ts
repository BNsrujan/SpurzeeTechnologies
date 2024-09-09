

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

export interface StockData {
    stockName: string;
    change: string;
    changePercent: string;
    currentPrice: number;
    highPrice: number;
    lowPrice: number;
    isUpwardTrend: boolean;
  }
  