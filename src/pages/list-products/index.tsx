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
            <ProductCard imageUrl="http://simpleicon.com/wp-content/uploads/picture.png">
              Roupas
            </ProductCard>
    
            <ProductCard imageUrl="http://simpleicon.com/wp-content/uploads/picture.png">
              Camisetas
            </ProductCard>
    
            <ProductCard imageUrl="http://simpleicon.com/wp-content/uploads/picture.png">
              Moletons
            </ProductCard>
    
            <ProductCard imageUrl="http://simpleicon.com/wp-content/uploads/picture.png">
              Óculos
            </ProductCard>
    
            <ProductCard imageUrl="http://simpleicon.com/wp-content/uploads/picture.png">
              Acessórios
            </ProductCard>
    
            <ProductCard imageUrl="http://simpleicon.com/wp-content/uploads/picture.png">
              Bolsas
            </ProductCard>
    
            <ProductCard imageUrl="http://simpleicon.com/wp-content/uploads/picture.png">
              Calçados
            </ProductCard>
    
            <ProductCard imageUrl="http://simpleicon.com/wp-content/uploads/picture.png">
              Vestidos
            </ProductCard>

          </SimpleGrid>
    
        </Box>
        <Footer />
      </>
    );
  }
  