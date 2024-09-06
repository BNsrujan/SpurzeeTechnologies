import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from 'lucide-react';
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
import { MarkeAction } from "@/data/types";


interface MarketTableProps {
    data: MarkeAction[];
}

const Droupmenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="p-1 outline-none border-2 rounded-sm border-black">
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
