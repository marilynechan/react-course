import { Center, Loader, SimpleGrid } from "@mantine/core";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "./ProductContext";

export default function ProductList() {
  const { products, loading } = useContext(ProductContext);

  return (
    <>
      {loading ? (
        <Center>
          <Loader type="dots" size={"xl"} />
        </Center>
      ) : (
        <SimpleGrid
          cols={{ base: 1, sm: 2, xl: 5 }}
          spacing={"lg"}
          verticalSpacing={"lg"}
        >
          {products.products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </SimpleGrid>
      )}
    </>
  );
}
