import ChartComponent from "./ChartComponent";
import { Button } from "./ui/button";
import { ChartCandlestick, ChartPie, CheckCircle, FlagTriangleRight, TrendingUpDown } from 'lucide-react';


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

const GetStarted = () => {
    return (
        <div className=" lg:grid lg:grid-cols-2 lg:gap-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-col justify-center lg:pr-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-2 ">Get Started</h3>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Track your stock and mutual fund investments</h1>
                <div className="space-y-3 pb-10">
                    <p className="flex items-center text-gray-600"><ChartCandlestick  className="w-5 h-5 text-gray-500 mr-2" />Clear charts with zoom for detailed analysis.</p>
                    <p className="flex items-center text-gray-600"><TrendingUpDown  className="w-5 h-5 text-gray-500 mr-2" />Limited, well-chosen indicators for accurate signals.</p>
                    <p className="flex items-center text-gray-600"><FlagTriangleRight  className="w-5 h-5 text-gray-500 mr-2" />Find out red flags in your portfolio</p>
                    <p className="flex items-center text-gray-600"><ChartPie  className="w-5 h-5 text-gray-500 mr-2" />Easy date-specific chart viewing
                    .</p>
                   
                </div>
                <Button className="w-full mt-1.5 py-6 text-[16px] font-semibold">Start</Button>

            </div>
            <div className="">
                    <ChartComponent data={initialData} />
                </div>
        </div>
    )
}

export default GetStarted
