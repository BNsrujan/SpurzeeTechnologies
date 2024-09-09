import StockCard from "@/components/StockCard";
// import ChartComponent from '@/components/ChartComponent';
import Marketable from "@/components/marketTable";
import GetStarted from "@/components/getstarted";
import AdvancedTools from "@/components/AdvancedTools";
import {stockData} from "@/data/data";


export default function Home() {
  return (
    <div className="w-full flex-col">
      <div className=" gap-3 flex justify-center my-5">
        {stockData.map((stock, index) => (
          <StockCard
            key={index}
            stockName={stock.stockName}
            change={stock.change}
            changePercent={stock.changePercent}
            currentPrice={stock.currentPrice}
            highPrice={stock.highPrice}
            lowPrice={stock.lowPrice}
            isUpwardTrend={stock.isUpwardTrend}
          />
        ))}
      </div>

      <div className="mb-28 mt-9">
        <GetStarted />
      </div>

      <h1 className="text-center font-bold text-5xl mb-7">Market Action</h1>
      <Marketable />

      <AdvancedTools />

      <div className="h-96"></div>
    </div>
  );
}
