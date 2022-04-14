import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CategoryCardProps {
  imageUrl: string;
  children: ReactNode;
}

export function CategoryCard({ imageUrl, children }: CategoryCardProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      background={`url(${imageUrl}) center/cover no-repeat`}
      h="15rem"
      // w="400px"
      borderRadius="10px"
      boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
    >
      <Text fontFamily="bold" fontSize="48px" color="light.200">
        {children}
      </Text>
    </Flex>
  );
}
