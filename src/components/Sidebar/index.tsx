import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { SidebarContent } from "./SidebarContent";
import { IoIosMenu } from "react-icons/io";

export function Sidebar() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onClose, onToggle } = useDisclosure();

  if (isMobile) {
    return (
      <>
        <Button
          display="flex"
          bg="brown.500"
          onClick={onToggle}
          mt="1rem"
          alignItems="center"
          _hover={{ bg: "brown.400" }}
          borderTopLeftRadius="0"
          borderBottomLeftRadius="0"
          w="fit-content"
        >
          <Icon
            as={IoIosMenu}
            aria-label="Botão de menu"
            color="white"
            bg="none"
            fontSize="1.7rem"
          />
        </Button>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex flexDir="column" alignItems="center" gap="1rem" mt="3.5rem">
                <Avatar
                  src="https://static2.srcdn.com/wordpress/wp-content/uploads/2022/03/Elden-Ring-Ranni-and-Her-Spirit-From-Melina.jpg"
                  name="Ranni"
                  size="2xl"
                />
                <Text fontWeight="bold" fontSize="xl">
                  Ranni
                </Text>
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <SidebarContent />
            </DrawerBody>

            <DrawerFooter justifyContent="center">
              <Button mt="auto" mb="1rem" colorScheme="brand" p="1.5rem">
                CRIAR COMUNIDADE
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Flex
      as="aside"
      flexDirection="column"
      maxW="330px"
      height="85vh"
      bg="white"
      boxShadow="2xl"
      alignItems="center"
      gap="1.8rem"
      px="0.5rem"
    >
      <Flex flexDir="column" alignItems="center" gap="1rem" mt="3.5rem">
        <Avatar
          src="https://static2.srcdn.com/wordpress/wp-content/uploads/2022/03/Elden-Ring-Ranni-and-Her-Spirit-From-Melina.jpg"
          name="Ranni"
          size="2xl"
        />
        <Text fontWeight="bold" fontSize="xl">
          Ranni
        </Text>
      </Flex>

      <SidebarContent />

      <Button mt="auto" mb="1rem" colorScheme="brand" p="1.5rem">
        CRIAR COMUNIDADE
      </Button>
    </Flex>
  );
}
