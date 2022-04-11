import { Avatar, Button, Divider, Flex, Link, Text } from "@chakra-ui/react";

export function SidebarContent() {
  return (
    <>
      <Flex flexDir="column" w="full" alignItems="center" gap="1rem">
        <Link
          bg="brown.500"
          w="full"
          textAlign="center"
          color="white"
          borderRadius="md"
          p="0.25rem"
          _hover={{ textDecor: "none", bg: "brown.400" }}
          href="/dashboard"
        >
          Configurações Perfil
        </Link>
        <Link
          width="full"
          textAlign="center"
          p="0.25rem"
          borderRadius="md"
          _hover={{ bg: "brown.500", color: "white" }}
        >
          Minhas Compras
        </Link>
        <Link
          width="full"
          textAlign="center"
          p="0.25rem"
          borderRadius="md"
          _hover={{ bg: "brown.500", color: "white" }}
          href="/dashboard/reset-password"
        >
          Alterar senha
        </Link>
      </Flex>

      {/* ADMIN MENU */}

      <Flex flexDir="column" w="full" alignItems="center" gap="1rem">
        <Divider w="16rem" opacity={1} />

        <Link
          w="full"
          textAlign="center"
          borderRadius="md"
          p="0.25rem"
          _hover={{ bg: "brown.500", color: "white" }}
        >
          Configurações Comunidade
        </Link>
        <Link
          width="full"
          textAlign="center"
          p="0.25rem"
          borderRadius="md"
          _hover={{ bg: "brown.500", color: "white" }}
        >
          Minhas Vendas
        </Link>

        <Link
          width="full"
          textAlign="center"
          p="0.25rem"
          borderRadius="md"
          _hover={{ bg: "brown.500", color: "white" }}
        >
          Gerenciar Comunidade
        </Link>
      </Flex>
    </>
  );
}
