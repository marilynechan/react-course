import { PropsWithChildren, useState } from "react";
import ProductContext from "./ProductContext";
import useProducts from "./useProducts";

export default function ProductContextProvider(props: PropsWithChildren) {
  const [query, setQuery] = useState<string | null>(null);
  const [resultsPerPage, setResultsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const products = useProducts(query, resultsPerPage, page);

  return (
    <ProductContext.Provider
      value={{
        products: products.products,
        loading: products.loading,
        query,
        setQuery,

        resultsPerPage,
        setResultsPerPage,

        page,
        setPage,
        totalPage: Math.ceil(products.products.total / resultsPerPage)
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
