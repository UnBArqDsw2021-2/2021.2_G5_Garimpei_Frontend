import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ButtonComponent } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { CategoryCard } from "../../components/CategoryCard";
import { Footer } from "../../components/Footer";
import { HeaderComponent } from "../../components/Header";

export default function Home() {
  return (
    <Box h="100vh" w="full" maxW="1440px" margin="0 auto">
      <HeaderComponent />

      <Box w="100%" mt="5.625rem" mb="2.5rem" borderRadius="8px">
        <Carousel />
      </Box>

      <Text fontSize="64px" mb="1.25rem">
        categorias
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="1.5rem">
        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Roupas
        </CategoryCard>

        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Camisetas
        </CategoryCard>

        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Moletons
        </CategoryCard>

        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Óculos
        </CategoryCard>

        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Acessórios
        </CategoryCard>

        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Bolsas
        </CategoryCard>

        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Calçados
        </CategoryCard>

        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Vestidos
        </CategoryCard>

        <CategoryCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
          Calças
        </CategoryCard>
      </SimpleGrid>

      <Flex mt={{ base: "1.5rem", lg: "5rem" }} justifyContent="flex-end">
        <ButtonComponent>Anunciar agora</ButtonComponent>
      </Flex>

      <Footer />
    </Box>
  );
}
