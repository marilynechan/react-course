import { Pagination } from "@mantine/core";
import { useContext } from "react";
import ProductContext from "./ProductContext";

export default function ProductPagination() {
  const { page, setPage, totalPage } = useContext(ProductContext);

  return (
    <Pagination
      total={totalPage}
      value={page}
      onChange={(newPage) => setPage(newPage)}
    />
  );
}
