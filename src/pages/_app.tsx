import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { HeaderComponent } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <HeaderComponent />
    </ChakraProvider>
  );
}

export default MyApp;
