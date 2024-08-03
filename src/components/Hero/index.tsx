import Link from "next/link";

import SectionContainer from "@/components/Layouts/SectionContainer";
import { Button } from "../ui/button";
import { Typing } from "./Typing";

const Hero = () => {
  return (
    <div className="relative -mt-[65px]">
      <SectionContainer className="pt-8 md:pt-16 overflow-hidden">
        <div className="relative">
          <div className="mx-auto">
            <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
              <div className="relative z-10 lg:h-auto pt-20 md:pt-16 lg:pt-20 lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8">
                <div className="flex flex-col items-center max-w-lg md:max-w-xl lg:max-w-2xl">
                  <h1 className="text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl">
                    <span className="block text-foreground bg-clip-text">
                      Elevate Your
                    </span>
                    <span className="text-primary bg-clip-text block md:ml-0">
                      Status Updates
                    </span>
                  </h1>
                  <p className="pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
                    Attrove is an AI-driven platform that seamlessly synthesizes
                    information & communication, ensuring key insights and
                    expertise are preserved and accessible so you can fuel
                    productivity and continuity across your organization.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button asChild>
                    <Link href="/login">Start your project</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/docs">Documentation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Hero;
