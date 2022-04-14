import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";

export default function Product() {
  const [featuredImageURL, setFeaturedImageURL] = useState(
    "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg"
  );

  function setImageURL(imageURL: string) {
    setFeaturedImageURL(imageURL);
  }
  console.log(featuredImageURL);

  return (
    <>
      <Header />

      <ContentWrapper>
        <Flex gap="1rem" py="3rem">
          <Box>
            <Image
              src={featuredImageURL}
              alt="Produto 1"
              maxW="649px"
              borderRadius="2xl"
            />

            <Flex mt="1rem" gap="1rem">
              <Button
                variant="unstyled"
                _focus={{ outline: "none" }}
                onClick={() =>
                  setFeaturedImageURL(
                    "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg"
                  )
                }
              >
                <Image
                  src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg"
                  alt="Produto 1"
                  maxW="136px"
                  maxH="90px"
                  borderRadius="2xl"
                />
              </Button>
              <Button
                variant="unstyled"
                _focus={{ outline: "none" }}
                onClick={() =>
                  setFeaturedImageURL(
                    "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg"
                  )
                }
              >
                <Image
                  src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg"
                  alt="Produto 1"
                  maxW="136px"
                  maxH="90px"
                  borderRadius="2xl"
                />
              </Button>
              <Button
                variant="unstyled"
                _focus={{ outline: "none" }}
                onClick={() =>
                  setFeaturedImageURL(
                    "https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  )
                }
              >
                <Image
                  src="https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Produto 1"
                  w="full"
                  maxW="136px"
                  maxH="90px"
                  borderRadius="2xl"
                />
              </Button>
              <Button
                variant="unstyled"
                _focus={{ outline: "none" }}
                onClick={() =>
                  setFeaturedImageURL(
                    "https://images.pexels.com/photos/441795/pexels-photo-441795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  )
                }
              >
                <Image
                  src="https://images.pexels.com/photos/441795/pexels-photo-441795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Produto 1"
                  w="full"
                  maxW="136px"
                  maxH="90px"
                  borderRadius="2xl"
                />
              </Button>
            </Flex>
          </Box>
          <Box pt="1rem">
            <Heading fontWeight="semibold">Óculos de Sol</Heading>
            <Text mt="1.5rem">
              Óculos de sol na cor preta com 3 meses apenas de uso. Nota fiscal
              e garantia de 1 ano. Acompanha a caixa original.
            </Text>
            <Flex gap="2rem" mt="3rem">
              <Flex
                bg="#79D275"
                color="white"
                alignItems="flex-start"
                borderRadius="2xl"
                px="0.8rem"
                py="0.7rem"
                boxShadow="lg"
              >
                <Text fontSize="0.8rem">R$</Text>
                <Text fontSize="2rem">100</Text>
              </Flex>
              <Box fontSize="0.875rem">
                <Text>Vendido por:</Text>
                <Text mt="-0.2rem" fontWeight="bold">
                  Comunidade dos Maias
                </Text>
                <Rating score={4.5} />
              </Box>
            </Flex>
            <Button
              mt="1.3rem"
              size="lg"
              bg="brand.500"
              color="white"
              px="3rem"
              _hover={{ bg: "brand.600" }}
            >
              Comprar
            </Button>
          </Box>
        </Flex>
      </ContentWrapper>

      <Footer />
    </>
  );
}
