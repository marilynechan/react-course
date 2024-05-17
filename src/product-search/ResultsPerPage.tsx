import { SegmentedControl } from "@mantine/core";
import { useContext } from "react";
import ProductContext from "./ProductContext";

export default function ResultsPerPage() {
  const { resultsPerPage, setResultsPerPage } = useContext(ProductContext);

  return (
    <>
      <SegmentedControl
        data={["10", "20", "50"]}
        defaultValue={`${resultsPerPage}`}
        onChange={(value) => {
          setResultsPerPage(Number.parseInt(value));
        }}
      />
    </>
  );
}
