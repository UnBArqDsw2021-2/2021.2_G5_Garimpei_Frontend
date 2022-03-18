import {
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import CurrencyInput from "react-currency-input";
import { ButtonComponent } from "../../components/Button/index";

export default function Add() {
  return (
    <Flex
      w="full"
      maxW="1440px"
      margin="0 auto"
      boxShadow="2xl"
      flexDirection="column"
      gap="2rem"
      bg="dark.700"
      position="relative"
      overflow="hidden"
      height={{base: "100%", lg: "100vh"}}
      p="2rem"
    >
      {/* Header section */}
      <Flex
        flexDirection="column"
        mt={{ lg: "1.563rem" }}
        ml={{ lg: "5.313rem" }}
        mb={{ base: "1.563rem", lg: "0" }}
        w="100%"
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <Heading
          fontSize={{ base: "3rem", lg: "5rem" }}
          fontWeight="regular"
          color="text.900"
          textAlign={{ base: "center", lg: "left" }}
          mt="1.5rem"
          w={{ base: "max-content", lg: "auto" }}
        >
          novo anúncio
        </Heading>
      </Flex>

      {/* Content section */}
      <Flex
        flexDirection={{ base: "column", lg:"row" }}
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems={{ base: "center", lg: "flex-start" }}
        mt={{ lg: "7.438rem" }}
      >
        {/* Upload file */}
        <Flex
          flexDirection="column"
          alignItems="center"
          mr={{ lg: "3.125rem" }}
          mb={{base: "3rem", lg: "1rem" }}
        >
          <Image
            src="/svgs/upload_image.svg"
            alt="Upload Image"
            height={{ base: "10rem", lg: "15.375rem" }}
          />
          <Text
            fontSize="1.125rem"
            fontWeight="500"
            mt="1rem"
          >
            cadastrar imagem
          </Text>
        </Flex>
        {/* Form */}
        <Flex
          flexDirection="column"
          justifyItems="center"
        >
          <InputGroup
            flexDirection="column"
            w="22.563rem"
          >
            <Input
              placeholder="Título do anúncio"
              type="text"
              focusBorderColor="brand.500"
              bg="white"
              boxShadow="lg"
            />
            {/*
              Input with currency mask (R$ x.xxx,xx)
              remember to filter mask before submitting to API
            */}
            <Input
              placeholder="Valor (R$)"
              as={CurrencyInput}
              type="text"
              prefix="R$ "
              decimalSeparator=","
              thousandSeparator="."
              focusBorderColor="brand.500"
              bg="white"
              mt={{ base: "1rem", lg: "0.625rem"}}
              boxShadow="lg"
            />
            <Textarea
              placeholder="Descrição"
              bg="white"
              mt={{ base: "1rem", lg: "0.625rem"}}
              mb={{ base: "3rem", lg: "1.563rem" }}
              boxShadow="lg"
              focusBorderColor="brand.500"
              h="9.938rem"
              minH="9.938rem"
              maxH="20rem"
            />
            <ButtonComponent>
              Anunciar
            </ButtonComponent>
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
}
