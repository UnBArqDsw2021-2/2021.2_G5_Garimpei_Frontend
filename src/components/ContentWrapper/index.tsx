import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <Box w="full" maxW="1120px" mx="auto" py="2rem">
      {children}
    </Box>
  );
}
