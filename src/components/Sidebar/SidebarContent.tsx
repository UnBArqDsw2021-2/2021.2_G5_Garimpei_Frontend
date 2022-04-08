import { Divider, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

export function SidebarContent() {
  return (
    <>
      <Flex flexDir="column" w="full" alignItems="center" gap="1rem">
        <ActiveLink href="/dashboard" passHref>
          <ChakraLink
            bg="brown.500"
            w="full"
            textAlign="center"
            color="white"
            borderRadius="md"
            p="0.25rem"
            _hover={{ textDecor: "none", bg: "brown.400" }}
          >
            Configurações Perfil
          </ChakraLink>
        </ActiveLink>

        <ActiveLink href="/dashboard/purchases" passHref>
          <ChakraLink
            width="full"
            textAlign="center"
            p="0.25rem"
            borderRadius="md"
            _hover={{ bg: "brown.500", color: "white" }}
          >
            Minhas Compras
          </ChakraLink>
        </ActiveLink>

        <ActiveLink href="/dashboard/reset-password" passHref>
          <ChakraLink
            width="full"
            textAlign="center"
            p="0.25rem"
            borderRadius="md"
            _hover={{ bg: "brown.500", color: "white" }}
          >
            Alterar senha
          </ChakraLink>
        </ActiveLink>
      </Flex>

      {/* ADMIN MENU */}

      <Flex flexDir="column" w="full" alignItems="center" gap="1rem">
        <Divider w="16rem" opacity={1} />

        <ActiveLink href="/community" passHref>
          <ChakraLink
            w="full"
            textAlign="center"
            borderRadius="md"
            p="0.25rem"
            _hover={{ bg: "brown.500", color: "white" }}
          >
            Configurações Comunidade
          </ChakraLink>
        </ActiveLink>

        <ActiveLink href="/community/sales" passHref>
          <ChakraLink
            width="full"
            textAlign="center"
            p="0.25rem"
            borderRadius="md"
            _hover={{ bg: "brown.500", color: "white" }}
          >
            Minhas Vendas
          </ChakraLink>
        </ActiveLink>

        <ActiveLink href="/community/users" passHref>
          <ChakraLink
            width="full"
            textAlign="center"
            p="0.25rem"
            borderRadius="md"
            _hover={{ bg: "brown.500", color: "white" }}
          >
            Gerenciar Comunidade
          </ChakraLink>
        </ActiveLink>
      </Flex>
    </>
  );
}
