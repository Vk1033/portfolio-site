"use client";

import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import NavDropDown from "./NavDropDown";

export default function Header() {
  return (
    <header className="z-10 relative h-16 ">
      <nav className="fixed h-16 bg-opacity-75 backdrop-blur-sm border-b w-screen">
        <div className="relative gap-8 pt-4 flex items-start max-w-3xl m-auto">
          <Link className="sm:hidden ml-4 mt-2" href="#home">
            <HomeIcon className="h-6 w-6" />
          </Link>
          {links.map((link) => (
            <span key={link.hash} className="hidden sm:block">
              <Link className={cn("ml-2 mt-1 bg-transparent text-base link-hover text-muted-foreground hover:text-foreground")} href={link.hash}>
                {link.name}
              </Link>
            </span>
          ))}
          <div className="basis-full" />
          <div className="sm:mr-6 mr-3 flex gap-3">
            <ModeToggle />
            <div className="sm:hidden">
              <NavDropDown />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
