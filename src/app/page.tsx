
import StockCard from "@/components/StockCard";
import ChartComponent from '@/components/ChartComponent';
import Marketable from "@/components/marketTable";
import GetStarted from "@/components/getstarted";
import MarketComponent from "@/components/indianMarkets";
import { usIndices, europeanIndices, asianIndices } from "@/data/data";
export default function Home() {

  const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
  ];

  return (
    <div className=" w-full flex-col ">
      <div className="p-7 gap-4 flex justify-center my-6">
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
      </div >
      <h1 className="text-center font-bold text-5xl mb-7">Market Action</h1>
      <Marketable />
      <div>
        <GetStarted />
      </div>
      <div style={{ padding: '20px' }}>
        <h1>Stock Market Chart</h1>
        <ChartComponent data={initialData} />
      </div>
      <MarketComponent usIndices={usIndices} europeanIndices={europeanIndices} asianIndices={asianIndices} />
    </div>
  );
}
