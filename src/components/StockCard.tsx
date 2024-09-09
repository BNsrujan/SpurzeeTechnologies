import { TrendingUp, TrendingDown, ChartLine } from "lucide-react";
import Link from "next/link";
import React from "react";

interface StockCardProps {
  stockName: string;
  change: string;
  changePercent: string;
  currentPrice: number;
  highPrice: number;
  lowPrice: number;
  isUpwardTrend: boolean;
}
const StockCard: React.FC<StockCardProps> = ({
  stockName,
  change,
  changePercent,
  currentPrice,
  highPrice,
  lowPrice,
  isUpwardTrend,
}) => {
  return (
    <div className="border p-5 rounded-lg shadow-md max-w-sm min-w-[500px] bg-white ">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{stockName}</h2>
          <span
            className={`${isUpwardTrend ? "text-green-500" : "text-red-500"
              } font-semibold`}
          >
            {change} ({changePercent}%)
          </span>
        </div>
        <ChartLine className="text-blue-600 w-6 h-6" />
      </div>

      <div className="my-4 flex relative  items-center pb-1">
        <h1
          className={`text-2xl font-bold ${isUpwardTrend ? "text-green-600" : "text-red-600"
            } flex items-center`}
        >
          {isUpwardTrend ? (
            <TrendingUp className="mr-2" />
          ) : (
            <TrendingDown className="mr-2" />
          )}{" "}
          {currentPrice}
        </h1>
        <div className="flex justify-between  absolute right-0 mt-2 gap-3">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">High</p>
            <p className="font-semibold text-green-400">{highPrice}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Low</p>
            <p className="font-semibold text-red-400">{lowPrice}</p>
          </div>
        </div>
      </div>

      <div className="text-blue-500 flex flex-wrap gap-2 pt-1 text-xs justify-center">
        <Link href="#">Analytics</Link>|<Link href="#">Options</Link>|
        <Link href="#">PCR</Link>|<Link href="#">Chain</Link>|
        <Link href="#">Max pain</Link>|<Link href="#">Movers</Link>|
        <Link href="#">T-OI</Link>
      </div>
    </div>
  );
};

export default StockCard;
