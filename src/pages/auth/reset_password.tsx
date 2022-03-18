import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";

export default function ResetPassword() {
  return (
    <Flex
      w="full"
      maxW="1440px"
      margin="0 auto"
      boxShadow="2xl"
      flexDirection={{ base: "column", lg: "row" }}
      gap="2rem"
      bg="white"
      position="relative"
      overflow="hidden"
      height="100vh"
      alignItems="center"
      p="2rem"
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/svgs/circles_bg.svg"
        position="absolute"
        top="-8rem"
        left={{ base: "-6rem", lg: "-12rem" }}
        maxW={{ base: "26rem", lg: "46rem" }}
        alt="Background image"
        zIndex="0"
      />

      <Flex
        flexDirection="column"
        mt="1rem"
        alignItems="center"
        zIndex="2"
        w="50%"
      >
        <Image src="/svgs/logo_simple.svg" maxW="10rem" alt="Garimpei" />
        <Heading
          fontSize={{ base: "1.9rem", lg: "2.25rem" }}
          fontWeight="bold"
          color="text.900"
          textAlign={{ base: "center", lg: "left" }}
          mt="1.5rem"
          maxW="17rem"
          w={{ base: "max-content", lg: "auto" }}
        >
          Bem Vindo a área do Usuário Garimpei.
        </Heading>
        <Text
          fontSize="1rem"
          color="text.900"
          fontWeight="regular"
          textAlign={{ base: "center", lg: "left" }}
          mt="1.5rem"
          maxW="17rem"
        >
          Nesta sessão você poderá recuperar sua senha
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        bg="brand.500"
        py={{ base: "3rem", lg: "5.625rem" }}
        px={{ base: "3rem", lg: "7.375rem" }}
        w={{ base: "full", lg: "100%" }}
        gap="0.75rem"
        borderRadius="20px"
        maxW="520px"
      >
        <Flex flexDirection="column">
          <Heading
            fontSize={{ base: "1.9rem", lg: "2.25rem" }}
            fontWeight="medium"
            color="white"
          >
            Recuperar senha
          </Heading>

          <Text fontSize="1rem" color="white" fontWeight="regular">
            Informe seu E-mail para alteração da senha
          </Text>
        </Flex>

        {/* Input */}

        <InputGroup boxShadow="lg" mt="1rem">
          <InputLeftElement pointerEvents="none">
            <Icon as={MdOutlineEmail} color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Seu email"
            type="email"
            focusBorderColor="brand.500"
            bg="white"
          />
        </InputGroup>

        <Button
          w="full"
          bg="gray.800"
          color="white"
          _hover={{ bg: "gray.900" }}
          _active={{ bg: "brand.600" }}
        >
          Recuperar
        </Button>
      </Flex>
    </Flex>
  );
}
