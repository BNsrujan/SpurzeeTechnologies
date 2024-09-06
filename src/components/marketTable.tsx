import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketActionTable from "./MarketAction";
import { marketData, topGainersData, topLosersData, sameOpenLowData, sameOpenHighData, gapUpData, gapDownData } from "@/data/data"; // Import relevant data sets
import { MarkeAction } from "@/data/types";


type TabKeys = 'marketaction' | 'topgainers' | 'toplosers' | 'sameopenlow' | 'sameopenhigh' | 'gapup' | 'gapdown';

const Marketable = () => {

  const tabDataMap: { [key in TabKeys]: MarkeAction[] } = {
    marketaction: marketData,
    topgainers: topGainersData,
    toplosers: topLosersData,
    sameopenlow: sameOpenLowData,
    sameopenhigh: sameOpenHighData,
    gapup: gapUpData,
    gapdown: gapDownData,
  };

  return (
    <Tabs defaultValue="marketaction" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="marketaction">Market Action</TabsTrigger>
        <TabsTrigger value="topgainers">Top Gainers</TabsTrigger>
        <TabsTrigger value="toplosers">Top Losers</TabsTrigger>
        <TabsTrigger value="sameopenlow">Same Open & Low</TabsTrigger>
        <TabsTrigger value="sameopenhigh">Same Open & High</TabsTrigger>
        <TabsTrigger value="gapup">Gap Up</TabsTrigger>
        <TabsTrigger value="gapdown">Gap Down</TabsTrigger>
      </TabsList>


      {Object.keys(tabDataMap).map((key) => (
        <TabsContent key={key} value={key as TabKeys}>
          <MarketActionTable data={tabDataMap[key as TabKeys]} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Marketable;
