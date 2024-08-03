import { cn } from "@/lib/utils";
import { Ref, forwardRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = forwardRef(
  ({ children, className, id }: Props, ref: Ref<HTMLDivElement>) => (
    <div
      ref={ref}
      id={id}
      className={cn(
        `sm:py-18 container relative mx-auto px-6 py-12 lg:px-16 lg:py-14 xl:px-20`,
        className
      )}
    >
      {children}
    </div>
  )
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
