import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { ProductSearchResults } from "./Product";



export default function useProducts(
  query: string | null,
  resultsPerPage: number = 10,
  page: number = 0
): {
  products: ProductSearchResults;
  loading: boolean;
} {
  const [products, setProducts] = useState<ProductSearchResults>({products: [], total: 0});
  const [loading, setLoading] = useState(true);
  const [debouncedQuery] = useDebouncedValue(query, 400);

  const fetchProducts = async (debouncedQuery: string | null) => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${
        debouncedQuery || ""
      }&limit=${resultsPerPage}&skip=${(page - 1) * resultsPerPage}`
    );

    const productsResponse = await response.json();
    setLoading(false);
    setProducts(productsResponse);
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts(debouncedQuery);
  }, [debouncedQuery, resultsPerPage, page]);
  // Why this warning on the dep array of useEffect?
  // React Hook useEffect has a missing dependency: 'fetchProducts'. 
  // Either include it or remove the dependency array.eslintreact-hooks/exhaustive-deps

  return { products, loading };
}
