import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { DrawerSiderbarNavProvider } from "../contexts/DrawerSiderbarNavContext";
import { makeServer } from "../services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../styles/apexcharts.css";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <DrawerSiderbarNavProvider>
          <Component {...pageProps} />
        </DrawerSiderbarNavProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
