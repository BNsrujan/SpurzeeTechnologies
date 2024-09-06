import { Search } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <nav className=" relative border-b-4 w-full">
            <div className="sm:relative flex sm:justify-normal justify-between items-center p-4 mx-24">
                <div className="flex lg:items-center space-x-2 sm:mx-4">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    <span className="text-lg font-bold">Spurzee Technologies</span>
                </div>

                <div className="flex items-center space-x-2 p-2 mx-3  rounded border">
                    <Search className="opacity-40" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none"
                    />
                </div>

                <div className="flex  absolute right-5 gap-6 items-center">
                    <div className="space-x-6">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>

                    <div>
                        <Button>Login/Register</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
