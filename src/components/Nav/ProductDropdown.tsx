import MenuItem from "./MenuItem";

import SolutionsData from "@/data/Solutions";
import { NavigationMenuLink } from "../ui/navigation-menu";

const ProductDropdown = () => {
  return (
    <ul className="fixed top-14 grid w-[700px] grid-cols-2 gap-2 rounded-xl border bg-background px-6 py-6">
      {Object.values(SolutionsData).map((component) => (
        <NavigationMenuLink key={component.name} asChild>
          <MenuItem
            title={component.name}
            href={component.url}
            description={component.description_short}
            icon={component.icon}
            className="h-fit"
            hasChevron
          />
        </NavigationMenuLink>
      ))}
    </ul>
  );
};

export default ProductDropdown;
