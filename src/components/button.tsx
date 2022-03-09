import { Button } from "@chakra-ui/react";

export default function ButtonComponent() {

  return (
        <Button
            colorScheme="brand"
            _hover={{ backgroundColor: "brand.600" }}
            _focus={{ boxShadow: "0 0 0 3px brand.600" }}
            >
            Entrar
        </Button>
  );
}
