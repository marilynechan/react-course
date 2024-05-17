import { Center, Group, Space, Stack, Title } from "@mantine/core";
import ProductContextProvider from "./ProductContextProvider";
import ProductList from "./ProductList";
import ProductPagination from "./ProductPagination";
import ResultsPerPage from "./ResultsPerPage";
import Searchbar from "./Searchbar";

export default function ProductSearch() {
  return (
    <ProductContextProvider>
      <Stack m={"md"}>
        <Center>
          <Title c={"white"}>Product Search</Title>
        </Center>
        <Searchbar />

        <Space h={"xs"} />

        <ProductList />

        <Group mx={"xl"} justify="center">
          <ProductPagination />
          <ResultsPerPage />
        </Group>
      </Stack>
    </ProductContextProvider>
  );
}
