import { Flex, Text, Box, Grid, GridItem, Wrap, WrapItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProductCardProps {
  imageUrl: string;
  children: ReactNode;
}

export function ProductCard({ imageUrl, children }: ProductCardProps) {
  return (
    <>
        <Grid>
            <GridItem>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    background={`url(${imageUrl}) center/cover no-repeat`}
                    h="15rem"
                    borderRadius="5px 5px 0 0"
                    boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
                >
                </Flex>
            </GridItem>
            <GridItem>
                <Box
                    background="black"
                    h="6.5rem"
                    borderRadius="0 0 15px 15px"
                    boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
                >
                
                <Text fontSize="24px" color="brand.500">
                    Nome do produto
                </Text>
                <Text fontSize="12px" color="light.200">
                    Vendido por:
                </Text>
                <Text fontFamily="bold" fontSize="12px" color="light.200">
                    Nome da comunidade
                </Text>
                </Box>
            </GridItem>
        </Grid>
     </>
  );
}
