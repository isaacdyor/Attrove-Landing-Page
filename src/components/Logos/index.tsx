import Image from "next/image";

export default function Logos() {
  const logos = [
    {
      image: "/logos/mozilla.svg",
      alt: "mozilla",
      name: "mozilla",
    },
    {
      image: "/logos/1password.svg",
      alt: "1password",
      name: "1password",
    },
    {
      image: "/logos/pwc.svg",
      alt: "pwc",
      name: "pwc",
    },
    {
      image: "/logos/pika.svg",
      alt: "pika",
      name: "pika",
    },
    {
      image: "/logos/humata.svg",
      alt: "humata",
      name: "humata",
    },
    {
      image: "/logos/krea.svg",
      alt: "krea",
      name: "krea",
    },
    {
      image: "/logos/udio.svg",
      alt: "udio",
      name: "udio",
    },
    {
      image: "/logos/langchain.svg",
      alt: "langchain",
      name: "langchain",
    },
    {
      image: "/logos/resend.svg",
      alt: "resend",
      name: "resend",
    },
    {
      image: "/logos/loops.svg",
      alt: "loops",
      name: "loops",
    },
    {
      image: "/logos/mobbin.svg",
      alt: "mobbin",
      name: "mobbin",
    },
    {
      image: "/logos/gopuff.svg",
      alt: "gopuff",
      name: "gopuff",
    },
    {
      image: "/logos/chatbase.svg",
      alt: "chatbase",
      name: "chatbase",
    },
    {
      image: "/logos/betashares.svg",
      alt: "betashares",
      name: "betashares",
    },
  ];

  return (
    <div className="pb:14 flex flex-col items-center gap-12 py-12 lg:pb-24">
      <p className="max-w-md text-center text-2xl font-light text-muted-foreground">
        Trusted by teams from the world&rsquo;s leading organizations
      </p>
      <div className="mx-auto max-w-xl px-5 md:max-w-3xl lg:max-w-5xl lg:px-12">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 overflow-hidden lg:gap-x-8 lg:gap-y-7">
          {logos.map((logo) => (
            <div key={logo.name}>
              <Image
                src={logo.image}
                alt={logo.alt}
                priority
                width={32}
                height={32}
                className={"max-h-4 w-16 lg:max-h-5 lg:w-24"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
