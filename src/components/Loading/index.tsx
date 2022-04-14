import { CircularProgress, Flex } from "@chakra-ui/react";

export function Loading() {
  return (
    <Flex
      bg="red.500"
      position="fixed"
      top="0"
      left="0"
      w="full"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      zIndex="99"
      flexDirection="column"
    >
      <CircularProgress
        size="10rem"
        isIndeterminate
        color="white"
        trackColor="none"
        capIsRound
        thickness={3}
      />
    </Flex>
  );
}
