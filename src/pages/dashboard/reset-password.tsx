import {
  Button,
  Divider,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { DashboardLayout } from "../../components/DashboardLayout";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] =
    useState(false);

  return (
    <DashboardLayout>
      <Heading>Alterar senha</Heading>

      <Divider w="full" opacity={1} />

      {/* INPUTS */}
      <VStack>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={RiLockPasswordLine} color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Senha atual"
            type={showPassword ? "text" : "password"}
            focusBorderColor="brand.500"
            bg="white"
          />

          <InputRightElement
            _hover={{ cursor: "pointer" }}
            onClick={() => setShowPassword((oldState) => !oldState)}
          >
            <Icon as={!showPassword ? FiEye : FiEyeOff} />
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={RiLockPasswordLine} color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Nova senha"
            type={showNewPassword ? "text" : "password"}
            focusBorderColor="brand.500"
            bg="white"
          />

          <InputRightElement
            _hover={{ cursor: "pointer" }}
            onClick={() => setShowNewPassword((oldState) => !oldState)}
          >
            <Icon as={!showNewPassword ? FiEye : FiEyeOff} />
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={RiLockPasswordLine} color="gray.400" />
          </InputLeftElement>

          <Input
            placeholder="Confirmar senha"
            type={showNewPasswordConfirmation ? "text" : "password"}
            focusBorderColor="brand.500"
            bg="white"
          />

          <InputRightElement
            _hover={{ cursor: "pointer" }}
            onClick={() =>
              setShowNewPasswordConfirmation((oldState) => !oldState)
            }
          >
            <Icon as={!showNewPasswordConfirmation ? FiEye : FiEyeOff} />
          </InputRightElement>
        </InputGroup>
      </VStack>

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
