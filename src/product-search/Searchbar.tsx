import { TextInput } from "@mantine/core";
import { useContext } from "react";
import ProductContext from "./ProductContext";

export default function Searchbar() {
  const { setQuery, setPage } = useContext(ProductContext);

  return (
    <TextInput
      size="xl"
      flex={1}
      placeholder="Search"
      c={"white"}
      onChange={(event) => {
        setQuery(event.currentTarget.value);
        setPage(1);
      }}
    />
  );
}
