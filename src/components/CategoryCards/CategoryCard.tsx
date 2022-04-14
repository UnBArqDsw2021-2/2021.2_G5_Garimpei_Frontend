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
      borderRadius="10px"
    >
      <Text fontFamily="bold" fontSize="48px" color="light.200">
        {children}
      </Text>
    </Flex>
  );
}
