import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Carousel } from "../components/Carousel";
import { CategoryCards } from "../components/CategoryCards";
import { ContentWrapper } from "../components/ContentWrapper";

export default function Home() {
  const router = useRouter();

  function handleRedirect(path: string) {
    router.push(path);
  }
  return (
    <ContentWrapper>
      <Box w="100%" mt="5.625rem" mb="2.5rem" borderRadius="8px" px="2rem">
        <Carousel />
      </Box>

      <Box px="1rem">
        <Text fontSize="64px" mb="1.25rem">
          categorias
        </Text>

        <CategoryCards />

        <Flex mt={{ base: "1.5rem", lg: "5rem" }} justifyContent="flex-end">
          <Button
            bg="brand.500"
            color="white"
            _hover={{ bg: "brand.600" }}
            onClick={() => handleRedirect("products/new")}
            mb="3rem"
          >
            Anunciar agora
          </Button>
        </Flex>
      </Box>
    </ContentWrapper>
  );
}
