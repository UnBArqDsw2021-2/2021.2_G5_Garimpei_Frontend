import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AiOutlinePlus } from "react-icons/ai";

export default function NewProduct() {
  return (
    <>
      <Header />

      <ContentWrapper>
        <Heading>novo anúncio</Heading>
        <Flex mt="4rem" justifyContent="center" gap="2rem">
          <Box
            w="12rem"
            h="16rem"
            border="1px dashed #adadad"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ cursor: "pointer" }}
          >
            <Icon as={AiOutlinePlus} color="#adadad" fontSize="6rem" />
          </Box>
          <Flex flexDirection="column" gap="1rem" minW="18rem">
            <VStack>
              <Input shadow="md" placeholder="Título do anúncio" />
              <Input shadow="md" placeholder="Valor" />
              <Textarea shadow="md" placeholder="Descrição" />
            </VStack>
            <Button bg="brand.500" color="white" _hover={{ bg: "brand.600" }}>
              Anunciar
            </Button>
          </Flex>
        </Flex>
      </ContentWrapper>

      <Footer />
    </>
  );
}
