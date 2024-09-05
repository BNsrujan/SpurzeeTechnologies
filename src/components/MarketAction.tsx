import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { ChevronUp, ChevronDown } from 'lucide-react';

interface MarkeAction {
    symbol: string;
    currentprice: number;
    todayleft: number;
    todayright: number;
    change: number;
    prevclose: number;
    volume: string;
    updown: boolean;
}

interface MarketTableProps {
    data: MarkeAction[]; // Accepts an array of market actions
}

const MarketActionTable: React.FC<MarketTableProps> = ({ data }) => {
    return (
        <Table>
            <TableCaption>A summary of the market action for selected stocks.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Symbol</TableHead>
                    <TableHead>Current Price</TableHead>
                    <TableHead>Today L/H</TableHead>
                    <TableHead>Change (%)</TableHead>
                    <TableHead>Prev. Close</TableHead>
                    <TableHead>Volume</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.symbol}</TableCell>
                        <TableCell>{item.currentprice}</TableCell>
                        <TableCell>{item.todayleft} / {item.todayright}</TableCell>
                        <TableCell className="flex items-center">
                            <span>{item.updown ? <ChevronUp color="green" size={20} /> : <ChevronDown color="red" size={20} />}</span>
                            {item.change}%
                        </TableCell>
                        <TableCell>{item.prevclose}</TableCell>
                        <TableCell>{item.volume}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default MarketActionTable;
