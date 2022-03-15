import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdOutlineEmail, MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  function handleGoBack() {
    router.push("/auth");
  }

  return (
    <Flex w="full" maxW="1440px" margin="0 auto" boxShadow="2xl">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="brand.500"
        w={{ base: "100%", lg: "65%" }}
        gap="2rem"
      >
        {/* Garimpei Logo */}
        <Image
          src="/images/logo_with_name_black.png"
          alt="Garimpei"
          w={{ base: "10rem", lg: "19.125rem" }}
          h="auto"
          marginTop={{ base: "3rem", lg: "none" }}
        />

        <Flex
          flexDirection="column"
          alignItems="center"
          bg="gray.200"
          py={{ base: "3rem", lg: "5.625rem" }}
          px={{ base: "6rem", lg: "7.375rem" }}
          w={{ base: "full", lg: "auto" }}
          gap="0.75rem"
        >
          <Heading
            fontSize={{ base: "1.5rem", lg: "2rem" }}
            fontWeight="medium"
            color="text.900"
          >
            Criar Conta no Garimpei
          </Heading>

          {/* Social Links */}
          <HStack>
            <Image src="/svgs/google.svg" alt="Google" />
            <Image src="/svgs/facebook.svg" alt="Facebook" />
          </HStack>

          <Text fontSize="1rem" fontWeight="regular" mt="1.75rem">
            ou utilize seu e-mail:
          </Text>

          {/* Inputs */}

          <InputGroup boxShadow="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={MdOutlinePerson} color="gray.400" />
            </InputLeftElement>

            <Input
              placeholder="Seu nome"
              type="text"
              focusBorderColor="brand.500"
              bg="white"
            />
          </InputGroup>

          <InputGroup boxShadow="lg">
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

          <InputGroup boxShadow="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={RiLockPasswordLine} color="gray.400" />
            </InputLeftElement>

            <Input
              placeholder="Sua senha"
              type={showPassword ? "text" : "password"}
              focusBorderColor="brand.500"
              bg="white"
            />

            <InputRightElement
              _hover={{ cursor: "pointer" }}
              onClick={() => setShowPassword((oldState) => !oldState)}
            >
              <Icon as={!showPassword ? FiEye : FiEyeOff} />
            </InputRightElement>
          </InputGroup>

          {/* Buttons */}
          <Flex w="full" gap="1rem">
            <Button
              w="50%"
              background="transparent"
              borderColor="brand.500"
              borderWidth="1px"
              borderStyle="solid"
              color="brand.500"
              onClick={handleGoBack}
            >
              Voltar
            </Button>
            <Button
              w="50%"
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.600" }}
            >
              Cadastrar
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* ******************* Rightside Image ********************* */}
      {!isMobile && <Box w="35%" h="100vh" bgImage="/images/bg_signup.png" />}
    </Flex>
  );
}
