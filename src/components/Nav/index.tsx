"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { menu } from "@/data/Nav";
import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./HamburgerMenu";

export function Nav() {
  const isUserLoading = false;
  const isLoggedIn = true;

  const [open, setOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-40 transform border-b ">
      <div className="absolute inset-0 h-full w-full opacity-80 bg-background" />
      <div className="relative flex items-center justify-between h-16 mx-auto lg:container  lg:px-24 xl:px-36">
        <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="lg:flex block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm"
            >
              <Logo />
            </Link>
            <NavigationMenu className="relative z-40  backdrop-blur-sm transition-opacity hidden lg:flex items-center">
              <NavigationMenuList className="flex gap-1">
                {menu.primaryNav.map((menuItem) =>
                  menuItem.hasDropdown ? (
                    <NavigationMenuItem
                      className="text-sm font-medium"
                      key={menuItem.title}
                    >
                      <NavigationMenuTrigger className="!bg-transparent hover:text-brand-link data-[state=open]:!text-brand-link data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter data-[radix-collection-item]:focus-visible:text-foreground px-2 h-auto">
                        {menuItem.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {menuItem.dropdown}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem
                      className="text-sm font-medium"
                      key={menuItem.title}
                    >
                      <NavigationMenuLink asChild>
                        <MenuItem
                          href={menuItem.url}
                          title={menuItem.title}
                          className="group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                          hoverColor="brand"
                        />
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="lg:flex items-center gap-2 hidden ">
            {!isUserLoading && (
              <>
                {isLoggedIn ? (
                  <Link href={"/dashboard"} className="w-auto">
                    <Button variant="default" size="sm" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href={"/login"} className="w-auto">
                      <Button variant="secondary" size="sm" className="w-full">
                        Log In
                      </Button>
                    </Link>
                    <Link href="/signup" className="w-auto">
                      <Button variant="default" size="sm" className="w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <HamburgerButton toggleFlyOut={() => setOpen(true)} />
      </div>
      <MobileMenu open={open} setOpen={setOpen} menu={menu} />
    </div>
  );
}

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
  );
});
ListItem.displayName = "ListItem";
