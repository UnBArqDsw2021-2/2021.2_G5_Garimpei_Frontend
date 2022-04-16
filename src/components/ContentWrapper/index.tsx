import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface ContentWrapperProps {
  children: ReactNode;
}

export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <>
      <Header />
      <Flex
        flexDir="column"
        justifyContent="space-between"
        minH="calc(100vh - 5.625rem)"
      >
        <Box w="full" maxW="1440px" mx="auto" py="2rem" pb="full">
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
}
