import SolutionsData from "@/data/Solutions";
import SectionContainer from "../Layouts/SectionContainer";

import React from "react";
import { ProductCard } from "./ProductCard";

export const Product = () => {
  return (
    <SectionContainer>
      <ul className="grid grid-cols-1 gap-4 !pt-0 sm:grid-cols-2 lg:grid-cols-3 xl:gap-3 2xl:gap-6">
        {Object.values(SolutionsData).map((product) => (
          <React.Fragment key={product.name}>
            <ProductCard
              title={product.name}
              href={product.url}
              description={product.description}
              icon={product.icon}
              className="h-fit"
            />
          </React.Fragment>
        ))}
      </ul>
    </SectionContainer>
  );
};
