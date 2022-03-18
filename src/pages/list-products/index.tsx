import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ButtonComponent } from "../../components/Button";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Footer";
import { HeaderComponent } from "../../components/Header";

export default function ListProducts() {
    return (
      <>
        <HeaderComponent />
        <Box h="100vh" w="full" maxW="1120px" margin="0 auto">
    
          <Text fontSize="64px" my="1.25rem">
            camisetas
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="1.5rem">
            <ProductCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
              Roupas
            </ProductCard>
    
            <ProductCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
              Camisetas
            </ProductCard>
    
            <ProductCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
              Moletons
            </ProductCard>
    
            <ProductCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
              Óculos
            </ProductCard>
    
            <ProductCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
              Acessórios
            </ProductCard>
    
            <ProductCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
              Bolsas
            </ProductCard>
    
            <ProductCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
              Calçados
            </ProductCard>
    
            <ProductCard imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80">
              Vestidos
            </ProductCard>

          </SimpleGrid>
    
          <Flex mt={{ base: "1.5rem", lg: "5rem" }} justifyContent="flex-end">
            <ButtonComponent>Anunciar agora</ButtonComponent>
          </Flex>
    
        <Footer />
        </Box>
      </>
    );
  }
  