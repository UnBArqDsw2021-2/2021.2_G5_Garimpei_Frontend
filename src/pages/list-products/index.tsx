import { Box, Button, Flex, SimpleGrid, Text, Select } from "@chakra-ui/react";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Footer";
import { HeaderComponent } from "../../components/Header";
import { HiOutlineAdjustments } from "react-icons/hi"

export default function ListProducts() {
    return (
      <>
        <HeaderComponent />
        <Box h="100vh" w="full" maxW="1120px" margin="0 auto">

          <Flex align="center">
            <Text fontSize="64px" my="1.25rem">
              camisetas
            </Text>
            
            <Button ml="auto" mr="12" h="8" rightIcon={<HiOutlineAdjustments/>} bg="brand.100">
              Filtros
            </Button>

            <Text mr="2">
              ordenar por
            </Text>

            <Select w="auto" h="8" bg="brand.100">
              <option value='option1'>Maior Preço</option>
              <option value='option2'>Menor Preço</option>
              <option value='option3'>Mais Recentes</option>
            </Select>
          </Flex>

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
