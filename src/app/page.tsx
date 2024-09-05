import MarketActionTable from "@/components/MarketAction";
import StockCard from "@/components/StockCard";
import {marketData} from "../data/data"
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className=" w-full flex-col ">
      <div className="p-7 gap-4 flex justify-center">
      <StockCard
        stockName="NIFTY BANK"
        change="72.80"
        changePercent="0.14"
        currentPrice={51473.05}
        highPrice={51636.75}
        lowPrice={51389.15}
        isUpwardTrend={true}
      />
      <StockCard
        stockName="NIFTY BANK"
        change="72.80"
        changePercent="0.14"
        currentPrice={51473.05}
        highPrice={51636.75}
        lowPrice={51389.15}
        isUpwardTrend={true}
      />
      <StockCard
        stockName="NIFTY BANK"
        change="72.80"
        changePercent="0.14"
        currentPrice={51473.05}
        highPrice={51636.75}
        lowPrice={51389.15}
        isUpwardTrend={true}
        
      />
      
      
      </div>
      <MarketActionTable data={marketData} />
      <div>
      <Button className="px-4 py-2 text-base sm:text-lg lg:text-xl ">Click Me</Button>
      </div>
    </div>
  );
}
