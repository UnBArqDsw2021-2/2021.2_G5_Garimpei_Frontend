import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { Loading } from "../components/Loading";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  console.log(router.events);

  const handleRouteChange = useCallback((event) => {
    console.log(event);
    if (event === "start") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => handleRouteChange("start"));
    router.events.on("routeChangeComplete", () =>
      handleRouteChange("complete")
    );
    router.events.on("routeChangeError", () => handleRouteChange("error"));

    return () => {
      router.events.off("routeChangeStart", () => handleRouteChange("teste"));
      router.events.off("routeChangeComplete", () =>
        handleRouteChange("complete")
      );
      router.events.off("routeChangeError", () =>
        handleRouteChange("complete")
      );
    };
  }, [router.events, handleRouteChange]);

  return (
    <ChakraProvider theme={theme}>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
}

export default MyApp;
