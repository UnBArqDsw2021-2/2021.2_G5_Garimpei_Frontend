import { Button } from "@chakra-ui/react";

type ButtonProps = {
    children: React.ReactNode;
}

export function ButtonComponent(props: ButtonProps) {

  return (
        <Button
            colorScheme="brand"
            _hover={{ backgroundColor: "brand.600" }}
            _focus={{ boxShadow: "0 0 0 3px brand.600" }}
            >
            {props.children}
        </Button>
  );
}
