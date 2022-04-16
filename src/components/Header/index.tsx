import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";

export function Header() {
  const router = useRouter();
  const isUserLoggedIn = true;

  function handleRedirect(path: string) {
    router.push(path);
  }

  return isUserLoggedIn ? (
    <Box bg="brand.500" h="5.625rem">
      <Flex align="center" h="5.625rem" maxW="1440px" mx="auto">
        <Button
          bg="none"
          _hover={{ bg: "none" }}
          onClick={() => handleRedirect("/")}
        >
          <Image
            src="/svgs/logo.svg"
            alt="Logo garimpei"
            w="3.75rem"
            h="3.75rem"
          />
        </Button>

        <InputGroup w="40.625rem">
          <Input
            placeholder="Pesquisar por categoria, produto ou marca..."
            bg="white"
            h="3.75rem"
            ml="2rem"
          />
          <InputRightElement h="100%" mr={2}>
            <FiSearch size={25} />
          </InputRightElement>
        </InputGroup>

        <Flex align="center" ml="auto">
          <Image src="/svgs/user.svg" alt="Logo garimpei" h="30" />
          <Box ml="2">
            <Text lineHeight="5" color="#ECECEC">
              <Link onClick={() => handleRedirect("/dashboard")}>
                minha<br></br>conta
              </Link>
            </Text>
          </Box>
        </Flex>

        <Flex align="center" ml="3rem">
          <Image src="/svgs/heart.svg" alt="Logo garimpei" h="30" />
          <Box ml="2">
            <Text lineHeight="5" color="#ECECEC">
              <Link onClick={() => handleRedirect("/")}>
                meus<br></br>favoritos
              </Link>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  ) : (
    <Box bg="brand.500" h="5.625rem">
      <Flex align="center" h="5.625rem" maxW="1440px" mx="auto">
        <Button
          bg="none"
          _hover={{ bg: "none" }}
          onClick={() => handleRedirect("/")}
        >
          <Image
            src="/svgs/logo.svg"
            alt="Logo garimpei"
            w="3.75rem"
            h="3.75rem"
          />
        </Button>

        <InputGroup w="40.625rem">
          <Input
            placeholder="Pesquisar por categoria, produto ou marca..."
            bg="white"
            h="3.75rem"
            ml="2rem"
          />
          <InputRightElement h="100%" mr={2}>
            <FiSearch size={25} />
          </InputRightElement>
        </InputGroup>

        <Grid templateColumns="repeat(2, 1fr)" ml="auto">
          <GridItem>
            <Button
              bg="none"
              color="white"
              _hover={{ bg: "red.700" }}
              onClick={() => handleRedirect("/auth")}
            >
              entrar
            </Button>
          </GridItem>
          <GridItem ml="0.5rem">
            <Button
              bg="gray.900"
              color="white"
              _hover={{ bg: "gray.700" }}
              onClick={() => handleRedirect("/auth/signup")}
            >
              cadastrar
            </Button>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
