import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import LumenState from "./Context/LumenState";

const root = ReactDOM.createRoot(document.getElementById("root"));
const colors = {
  main: "#562dfa",
};
const theme = extendTheme({ colors });
root.render(
  <React.StrictMode>
    <LumenState>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </LumenState>
  </React.StrictMode>
);
