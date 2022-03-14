import { Button } from "@chakra-ui/react";

type ButtonProps = {
  children: React.ReactNode;
  isOutline?: boolean;
  color?: string;
}

export function ButtonComponent(props: ButtonProps) {

  return (
    <Button
      colorScheme={props.color}
      _hover={{
        backgroundColor: `${props.color}.600`,
        color: props.isOutline && `${props.color}.700`,
        filter: props.isOutline && 'brightness(200%)'
      }}
      _focus={{ boxShadow: `0 0 0 3px ${props.color}.600` }}
      variant= {props.isOutline ? 'outline' : 'solid'}
      >
      {props.children}
    </Button>
  );
}

ButtonComponent.defaultProps = {
  color: 'brand',
  isOutline: false
}
