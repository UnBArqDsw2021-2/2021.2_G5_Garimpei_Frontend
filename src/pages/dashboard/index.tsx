import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import {
  MdOutlineEmail,
  MdOutlinePerson,
  MdOutlinePhone,
} from "react-icons/md";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection={{ base: "column", lg: "row" }}>
        {/* SIDEBAR MENU */}

        <Sidebar />

        {/* PAGE CONTENT */}
        <Flex
          as="main"
          flexDirection="column"
          px="2.25rem"
          mt="1.5rem"
          w="full"
          gap="1rem"
          minH="70vh"
        >
          <Heading>minha conta</Heading>

          <Divider w="full" opacity={1} />

          {/* INPUTS */}
          <VStack>
            <InputGroup boxShadow="lg">
              <InputLeftElement pointerEvents="none">
                <Icon as={MdOutlinePerson} color="gray.400" />
              </InputLeftElement>

              <Input
                placeholder="Nome"
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
                placeholder="Email"
                type="email"
                focusBorderColor="brand.500"
                bg="white"
              />
            </InputGroup>

            <InputGroup boxShadow="lg">
              <InputLeftElement pointerEvents="none">
                <Icon as={MdOutlinePhone} color="gray.400" />
              </InputLeftElement>

              <Input
                placeholder="Telefone"
                type="email"
                focusBorderColor="brand.500"
                bg="white"
              />
            </InputGroup>
          </VStack>

          {/* BUTTONS */}
          <Flex
            w="full"
            alignItems="center"
            justifyContent="flex-end"
            gap="1rem"
          >
            <Button colorScheme="dark" _hover={{ bg: "dark.400" }}>
              Editar foto de perfil
            </Button>
            <Button colorScheme="brand">Alterar senha</Button>
          </Flex>

          {/* SAVE BUTTON */}
          <Button
            w="fit-content"
            alignSelf="flex-end"
            mt="auto"
            mb="1rem"
            colorScheme="dark"
            _hover={{ bg: "dark.400" }}
          >
            Salvar
          </Button>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
