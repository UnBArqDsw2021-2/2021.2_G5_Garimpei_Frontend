import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ButtonComponent } from "../components/Button";
import { Carousel } from "../components/Carousel";
import { CategoryCards } from "../components/CategoryCards";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Box w="full" maxW="1440px" margin="0 auto">
        <Box w="100%" mt="5.625rem" mb="2.5rem" borderRadius="8px" px="2rem">
          <Carousel />
        </Box>

        <Box px="1rem">
          <Text fontSize="64px" mb="1.25rem">
            categorias
          </Text>

          <CategoryCards />

          <Flex mt={{ base: "1.5rem", lg: "5rem" }} justifyContent="flex-end">
            <ButtonComponent>Anunciar agora</ButtonComponent>
          </Flex>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
