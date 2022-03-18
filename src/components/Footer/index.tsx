import { Container, Stack, Text, Flex, HStack } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex bg="dark.500" w="full" position="absolute" bottom="0" left="0">
      <Container
        as={Stack}
        maxW={"2xl"}
        py={6}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <HStack justifyContent={"center"}>
          <Text color="white" fontSize={"xs"}>
            © Powered By{" "}
          </Text>
          <Text color="brand.500" fontSize={"xs"} fontWeight="bold">
            Garimpei Team
          </Text>
        </HStack>
      </Container>
    </Flex>
  );
}
