import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import { ArrowRight } from "lucide-react";

export const ProductCard = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    description?: string;
    icon?: string;
  }
>(
  (
    {
      className,
      title,
      href = "",
      description,
      icon,

      children,

      ...props
    },
    ref,
  ) => {
    return (
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            {icon && (
              <div className="flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                <svg
                  className="h-6 w-6 text-muted-foreground group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={icon}
                    stroke="currentColor"
                  />
                </svg>
              </div>
            )}
            <Button variant="ghost" asChild>
              <div className="flex items-center gap-1">
                <Link href={href}>Learn More</Link>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
);

ProductCard.displayName = "ProductCard";
