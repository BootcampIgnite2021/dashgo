import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { DrawerSiderbarNavProvider } from "../contexts/DrawerSiderbarNavContext";
import { makeServer } from "../services/mirage";

import "../styles/apexcharts.css";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DrawerSiderbarNavProvider>
        <Component {...pageProps} />
      </DrawerSiderbarNavProvider>
    </ChakraProvider>
  );
}

export default MyApp;
