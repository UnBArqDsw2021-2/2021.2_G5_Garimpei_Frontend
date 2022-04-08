import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection={{ base: "column", lg: "row" }}>
        {/* SIDEBAR MENU */}
        <Sidebar />

        {/* PAGE CONTENT */}
        <Flex
          as="main"
          flexDirection="column"
          px="2.25rem"
          mt="1.5rem"
          w="full"
          gap="1rem"
          minH="70vh"
        >
          {children}
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
