import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

import { DEFAULT_EASE } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import MenuItem from "./MenuItem";
import { Logo } from "../Logo";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  menu: any;
}

const MobileMenu = ({ open, setOpen, menu }: Props) => {
  const isLoggedIn = true;
  const isUserLoading = false;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.15, staggerChildren: 0.05, ease: DEFAULT_EASE },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const listItem = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: DEFAULT_EASE },
    },
    exit: { opacity: 0, transition: { duration: 0.05 } },
  };

  console.log(menu);

  const AccordionMenuItem = ({ menuItem }: any) => (
    <AccordionContent className="py-3">
      {Object.values(menuItem.subMenu)?.map((component: any) => (
        <MenuItem
          key={component.name}
          title={component.name}
          href={component.url}
          description={component.description_short}
          icon={component.icon}
          className="pl-0"
        />
      ))}
    </AccordionContent>
  );

  const Menu = () => (
    <Accordion type="single" collapsible>
      {menu.primaryNav.map((menuItem: any) => (
        <m.div
          variants={listItem}
          className="border-b border-stone-300  border-opacity-10 [&>div]:!rounded-none"
          key={menuItem.title}
        >
          {menuItem.hasDropdown ? (
            <AccordionItem
              value={menuItem.title}
              id={menuItem.title}
              className="block  relative  pl-3 pr-4 text-base font-medium text-foreground hover:bg-surface-200"
            >
              <AccordionTrigger className="p-0 py-1.5 hover:bg-background/10">
                {menuItem.title}
              </AccordionTrigger>
              <AccordionMenuItem menuItem={menuItem} />
            </AccordionItem>
          ) : (
            <Link
              href={menuItem.url}
              className="block hover:bg-background/10 py-1.5 pl-3 pr-4 text-base font-medium text-foreground hover:bg-surface-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:rounded"
            >
              {menuItem.title}
            </Link>
          )}
        </m.div>
      ))}
    </Accordion>
  );

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        {open && (
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-secondary fixed overflow-hidden inset-0 z-50 h-screen max-h-screen w-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] transform"
          >
            <div className="absolute h-16 px-6 flex items-center justify-between w-screen left-0 top-0 z-50 bg-overlay before:content[''] before:absolute before:w-full before:h-3 before:inset-0 before:top-full before:bg-gradient-to-b before:from-background-overlay before:to-transparent">
              <Link
                href="/"
                as="/"
                className="block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm"
              >
                <Logo />
              </Link>
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground-lighter focus:ring-brand bg-surface-100 hover:bg-surface-200 focus:outline-none focus:ring-2 focus:ring-inset"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="max-h-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] overflow-y-auto pt-20 pb-32 px-4">
              <Menu />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-auto w-full bg-background flex items-stretch p-4 gap-4">
              {!isUserLoading && (
                <>
                  {isLoggedIn ? (
                    <Button className="w-full" asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  ) : (
                    <>
                      <Link href={"/login"} className="w-full">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full h-10 py-4"
                        >
                          Log In
                        </Button>
                      </Link>
                      <Link href="/signup" className="w-full">
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full h-10 py-4"
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {open && (
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-background fixed overflow-hidden inset-0 z-40 h-screen w-screen transform"
          />
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default MobileMenu;
