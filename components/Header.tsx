"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import ModeToggle from "@/components/ModeToggle";

export default function Header() {
  return (
    <header className="z-[99] relative h-24 flex flex-col">
      <NavigationMenu className="fixed h-14 max-w-full w-full self-center bg-gray-950 bg-opacity-75 flex backdrop-blur-sm">
        <NavigationMenuList className="relative gap-5 max-w-3xl p-4 w-[48rem] justify-start ">
          {links.map((link) => (
            <NavigationMenuItem key={link.hash}>
              <NavigationMenuLink className={cn("mr-4 py-1 bg-transparent text-base text-gray-400 link-hover hover:text-gray-100")} href={link.hash}>
                {link.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem className="absolute right-4">
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
