import {
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
import { DashboardLayout } from "../../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
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
            type="number"
            focusBorderColor="brand.500"
            bg="white"
          />
        </InputGroup>
      </VStack>

      {/* BUTTONS */}
      <Flex w="full" alignItems="center" justifyContent="flex-end" gap="1rem">
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
    </DashboardLayout>
  );
}
