import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import "../styles/apexcharts.css";
import { DrawerSiderbarNavProvider } from "../contexts/DrawerSiderbarNavContext";

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
