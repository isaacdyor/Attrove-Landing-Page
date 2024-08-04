import Hero from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import Logos from "@/components/Logos";
import { Product } from "@/components/Product";
import { Screenshot } from "@/components/Screenshot";
export default function Home() {
  return (
    <>
      <Hero />
      <Screenshot />
      <Logos />
      <Product />
      <Integrations />
    </>
  );
}
