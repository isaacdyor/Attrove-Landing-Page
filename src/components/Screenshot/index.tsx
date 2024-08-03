import Image from "next/image";
import SectionContainer from "../Layouts/SectionContainer";

export const Screenshot = () => {
  return (
    <SectionContainer className="max-w-6xl lg:px-8">
      <div className="absolute left-0 right-0 top-0 z-20 h-full w-full bg-gradient-to-b from-transparent from-60% to-background to-90%" />
      <div className="group relative px-4 md:px-12">
        <div className="absolute -inset-x-12 -bottom-4 -top-8 rounded-full bg-gradient-to-b from-primary to-transparent opacity-30 blur-2xl" />

        <Image
          src="/images/dashboard.png"
          alt="Dashboard Screenshot"
          width={1440}
          height={1024}
          className="relative rounded-lg shadow-lg"
        />
      </div>
    </SectionContainer>
  );
};
