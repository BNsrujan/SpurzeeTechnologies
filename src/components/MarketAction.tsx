import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Ellipsis } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ChevronUp, ChevronDown } from 'lucide-react';
import { MarkeAction } from "@/data/types";

interface MarketTableProps {
    data: MarkeAction[];
}

const Droupmenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="p-2 outline-none border rounded-sm border-gray-400">
                <Ellipsis size={15} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Add To Watchlist</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Create Alert</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

// Correctly destructure the props
const TodayRange: React.FC<{ todayLeft: number; todayRight: number; progressValue: number; }> = ({ todayLeft, todayRight, progressValue }) => {
    return (
        <div className=" grid  grid-cols-3 ">
            <span className="mr-2">{todayLeft}</span>
            <Progress value={progressValue} className="w-1/2" />
            <span className="ml-2">{todayRight}</span>
        </div>
    );
};

const MarketActionTable: React.FC<MarketTableProps> = ({ data }) => {
    return (
        <Table>
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
                        <TableCell>
                            <TodayRange 
                                todayLeft={item.todayleft} 
                                todayRight={item.todayright} 
                                progressValue={item.todayleft/item.todayright} 
                            />
                        </TableCell>
                        <TableCell className="flex items-center">
                            <span>
                                {item.updown ? (
                                    <ChevronUp color="green" size={20} />
                                ) : (
                                    <ChevronDown color="red" size={20} />
                                )}
                            </span>
                            {item.change}%
                        </TableCell>
                        <TableCell>{item.prevclose}</TableCell>
                        <TableCell>{item.volume}</TableCell>
                        <TableCell>
                            <Droupmenu />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default MarketActionTable;
