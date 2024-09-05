import { MarkeAction } from './types';

export const marketData: MarkeAction[] = [
    {
        symbol: 'AAPL',
        currentprice: 150.12,
        todayleft: 148.00,
        todayright: 152.34,
        change: 1.2,
        prevclose: 149.00,
        volume: '3.2M',
        updown: true,
    },
    {
        symbol: 'GOOGL',
        currentprice: 2750.34,
        todayleft: 2700.00,
        todayright: 2785.00,
        change: -0.5,
        prevclose: 2760.00,
        volume: '1.4M',
        updown: false,
    },
    {
        symbol: 'TSLA',
        currentprice: 1200.56,
        todayleft: 1180.00,
        todayright: 1230.00,
        change: 2.5,
        prevclose: 1190.00,
        volume: '5.1M',
        updown: true,
    },
    
];
