import { createContext } from "react";
import { ProductSearchResults } from "./Product";

type ProductContextValue = {
  products: ProductSearchResults;

  loading: boolean;

  query: string | null;
  setQuery: (query: string | null) => void;

  resultsPerPage: number;
  setResultsPerPage: (resultsPerPage: number) => void;

  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

const ProductContext = createContext<ProductContextValue>({
  products: { products: [], total: 0 },

  loading: true,

  query: null,
  setQuery: () => {},

  resultsPerPage: 0,
  setResultsPerPage: (resultsPerPage: number) => {
    console.warn(
      `This should be overridden. Results per page: ${resultsPerPage}.`
    );
  },

  page: 0,
  setPage: (page: number) => {
    console.warn(`This should be overridden. Page: ${page}.`);
  },
  totalPage: 0,
});

export default ProductContext;
