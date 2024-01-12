"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { links } from "@/lib/data";
import { twMerge } from "tailwind-merge";

export default function Header() {
  return (
    <header className="z-[99] relative h-24 ">
      <nav className="fixed top-6  left-1/2 -translate-x-1/2 h-[3.25rem] p-4 flex justify-center items-center rounded-full border border-black bg-gray-950 bg-opacity-75">
        <NavigationMenu>
          <NavigationMenuList className="gap-5 ">
            {links.map((link) => (
              <NavigationMenuItem key={link.hash}>
                <NavigationMenuLink className={twMerge(navigationMenuTriggerStyle(), "rounded-full p-3")} href={link.hash}>
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
