import { NavigationIcon, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import * as React from "react"
import { cn } from "@/lib/utils"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: "Alert Dialog",
//         href: "/docs/primitives/alert-dialog",
//         description:
//             "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//         title: "Hover Card",
//         href: "/docs/primitives/hover-card",
//         description:
//             "For sighted users to preview content available behind a link.",
//     },
//     {
//         title: "Progress",
//         href: "/docs/primitives/progress",
//         description:
//             "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//         title: "Scroll-area",
//         href: "/docs/primitives/scroll-area",
//         description: "Visually or semantically separates content.",
//     },
//     {
//         title: "Tabs",
//         href: "/docs/primitives/tabs",
//         description:
//             "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//         title: "Tooltip",
//         href: "/docs/primitives/tooltip",
//         description:
//             "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
// ]


const Navbar = () => {
    return (
        <nav className=" relative border-b-4 w-full">
            <div className="sm:relative flex sm:justify-normal justify-between items-center p-4 mx-24">
                <div className="flex lg:items-center space-x-2 sm:mx-4">
                    <Link href="/"><Image src="/logo.png" alt="Logo" width={45} height={45} /></Link>
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


                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                    Analyse
                                    </NavigationMenuTrigger>
                                    
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                    Resourves
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Watch list
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>News</NavigationMenuTrigger>
                                    
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            shadcn/ui
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Beautifully designed components that you can copy and
                                                            paste into your apps. Accessible. Customizable. Open
                                                            Source.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/docs" title="Introduction">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </ListItem>
                                            <ListItem href="/docs/installation" title="Installation">
                                                How to install dependencies and structure your app.
                                            </ListItem>
                                            <ListItem href="/docs/primitives/typography" title="Typography">
                                                Styles for headings, paragraphs, lists...etc
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                <ListItem
                                                    title="User Manual"
                                                    href="/user-manual"
                                                >  
                                                </ListItem>
                                                <ListItem
                                                    title="FAQs"
                                                    href="/faqs"
                                                >  
                                                </ListItem>
                                                <ListItem
                                                    title="User Manual"
                                                    href="/user-manual"
                                                >  
                                                </ListItem>
                                          
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                               
                            </NavigationMenuList>
                        </NavigationMenu>



                    </div>

                    <div>
                        <Button>Login/Register</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
export default Navbar;
