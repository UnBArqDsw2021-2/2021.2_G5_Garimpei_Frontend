import { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex w="full" maxW="1440px" margin="0 auto" h="100vh" boxShadow="2xl">
      <VStack
        w={{ base: "full", lg: "35%" }}
        bg="white"
        boxShadow="4px 4px 6px rgba(0, 0, 0, 0.25)"
        p={{ base: "2rem", lg: "3rem", xl: "5.625rem" }}
        alignItems="flex-start"
        spacing="6"
      >
        <Image
          src="/images/logo.png"
          alt="Garimpei"
          margin="0 auto"
          marginBottom="1.625rem"
        />
        <Heading marginRight="auto">Login</Heading>
        <Flex w="full" flexDirection="column" gap="0.625rem">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={MdOutlineEmail} color="gray.400" />
            </InputLeftElement>

            <Input
              placeholder="E-mail"
              type="email"
              focusBorderColor="brand.500"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={RiLockPasswordLine} color="gray.400" />
            </InputLeftElement>

            <Input
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              focusBorderColor="brand.500"
            />

            <InputRightElement
              _hover={{ cursor: "pointer" }}
              onClick={() => setShowPassword((oldState) => !oldState)}
            >
              <Icon as={!showPassword ? FiEye : FiEyeOff} />
            </InputRightElement>
          </InputGroup>

          <Flex flexDir="column">
            <Link color="brand.500" href="#">
              Esqueci minha senha
            </Link>
            <Text>
              Novo no Garimpei?{" "}
              <Link color="brand.500" href="#">
                Criar conta
              </Link>
            </Text>
          </Flex>
        </Flex>
        <Flex w="full" flexDirection="column" gap="0.625rem">
          <Button
            colorScheme="brand"
            _hover={{ backgroundColor: "brand.600" }}
            _focus={{ boxShadow: "0 0 0 3px brand.600" }}
          >
            Entrar
          </Button>
          <Button>Entrar com Google</Button>
          <Button>Entrar com Facebook</Button>
        </Flex>
      </VStack>

      {/* SHOPPING IMAGE */}
      {!isMobile && (
        <Flex
          w="65%"
          bg="brand.500"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/svgs/login_drawing.svg" alt="Shopping drawing" w={765} />
        </Flex>
      )}
    </Flex>
  );
}