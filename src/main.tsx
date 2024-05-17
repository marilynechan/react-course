import { MantineProvider } from "@mantine/core";
import ReactDOM from "react-dom/client";
import ProductSearch from "./product-search/ProductSearch";

import "@mantine/core/styles.css";

import "./main.css";

function Application() {
  return (
    <MantineProvider>
      <ProductSearch />
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Application />);
