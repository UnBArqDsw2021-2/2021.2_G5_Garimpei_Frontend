import {
  Button,
  Divider,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { DashboardLayout } from "../../components/DashboardLayout";
import { BsPeople, BsHouseDoor } from "react-icons/bs";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";

export default function Community() {
  return (
    <DashboardLayout>
      <Heading>Minha comunidade</Heading>

      <Divider w="full" opacity={1} />

      {/* INPUTS */}
      <VStack>
        <InputGroup boxShadow="lg">
          <InputLeftElement pointerEvents="none">
            <Icon as={BsPeople} color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Nome da comunidade"
            type="text"
            focusBorderColor="brand.500"
            bg="white"
          />
        </InputGroup>

        <InputGroup boxShadow="lg">
          <InputLeftElement pointerEvents="none">
            <Icon as={MdOutlinePhone} color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Telefone da comunidade"
            type="number"
            focusBorderColor="brand.500"
            bg="white"
          />
        </InputGroup>

        <InputGroup boxShadow="lg">
          <InputLeftElement pointerEvents="none">
            <Icon as={MdOutlineEmail} color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Email da comunidade"
            type="email"
            focusBorderColor="brand.500"
            bg="white"
          />
        </InputGroup>

        <InputGroup boxShadow="lg">
          <InputLeftElement pointerEvents="none">
            <Icon as={BsHouseDoor} color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Endereço da comunidade"
            type="text"
            focusBorderColor="brand.500"
            bg="white"
          />
        </InputGroup>
      </VStack>

      <Button w="fit-content" mt="1rem" colorScheme="brand">
        Editar foto da comunidade
      </Button>

      {/* CREATE BUTTON */}
      <Button
        w="fit-content"
        alignSelf="flex-end"
        mt="auto"
        mb="1rem"
        colorScheme="dark"
        _hover={{ bg: "dark.400" }}
      >
        Criar
      </Button>
    </DashboardLayout>
  );
}
