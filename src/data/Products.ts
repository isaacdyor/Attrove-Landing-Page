import { type IconName } from "@/components/icons";

export type PRODUCT =
  | PRODUCT_SHORTNAMES.DATABASE
  | PRODUCT_SHORTNAMES.AUTHENTICATION
  | PRODUCT_SHORTNAMES.STORAGE
  | PRODUCT_SHORTNAMES.FUNCTIONS
  | PRODUCT_SHORTNAMES.REALTIME
  | PRODUCT_SHORTNAMES.VECTOR;

export enum PRODUCT_NAMES {
  DATABASE = "Database",
  AUTHENTICATION = "Authentication",
  STORAGE = "Storage",
  FUNCTIONS = "Edge Functions",
  REALTIME = "Realtime",
  VECTOR = "Vector",
}

export enum PRODUCT_SHORTNAMES {
  DATABASE = "database",
  AUTHENTICATION = "authentication",
  STORAGE = "storage",
  FUNCTIONS = "functions",
  REALTIME = "realtime",
  VECTOR = "vector",
}

export interface ProductProps {
  name: PRODUCT_NAMES;
  icon: IconName;
}

export type Products = {
  [product in PRODUCT]: ProductProps;
};

export const products: Products = {
  database: {
    name: PRODUCT_NAMES.DATABASE,
    icon: "settings",
  },
  authentication: {
    name: PRODUCT_NAMES.AUTHENTICATION,
    icon: "settings",
  },
  storage: {
    name: PRODUCT_NAMES.STORAGE,
    icon: "settings",
  },
  functions: {
    name: PRODUCT_NAMES.FUNCTIONS,
    icon: "settings",
  },
  realtime: {
    name: PRODUCT_NAMES.REALTIME,
    icon: "settings",
  },
  vector: {
    name: PRODUCT_NAMES.VECTOR,
    icon: "settings",
  },
};
