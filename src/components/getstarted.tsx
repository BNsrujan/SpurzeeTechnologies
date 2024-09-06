import { Button } from "./ui/button";
import { CheckCircle } from 'lucide-react'; // Import the icon you want to use

const GetStarted = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-col justify-center lg:pr-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Get Started</h3>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Track your stock and mutual fund investments</h1>
                <div className="space-y-2">
                    <p className="flex items-center text-gray-600"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Compare diversification score with the community</p>
                    <p className="flex items-center text-gray-600"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Predict expected returns of your portfolio</p>
                    <p className="flex items-center text-gray-600"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Find out red flags in your portfolio</p>
                    <p className="flex items-center text-gray-600"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Takes less than a minute</p>
                </div>
            </div>
            <div className="flex items-center justify-center lg:mt-0 mt-4">
                <Button className="w-full">Start</Button>
            </div>
        </div>
    )
}

export default GetStarted
