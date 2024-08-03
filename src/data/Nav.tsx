import ProductDropdown from "@/components/Nav/ProductDropdown";

import SolutionsData from "@/data/Solutions";

export const menu = {
  primaryNav: [
    {
      title: "Product",
      hasDropdown: true,
      dropdown: <ProductDropdown />,
      subMenu: SolutionsData,
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Docs",
      url: "/docs",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "About",
      url: "/about",
    },
  ],
};
