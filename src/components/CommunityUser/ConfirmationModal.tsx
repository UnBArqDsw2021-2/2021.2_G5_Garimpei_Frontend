import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface ConfirmationModalProps {
  userID: string;
  username: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ConfirmationModal({
  userID,
  username,
  isOpen,
  onClose,
}: ConfirmationModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Remover Usuário</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{`Deseja remover o usuário "${username}"?`}</ModalBody>

        <ModalFooter>
          <Button variant="outline" onClick={onClose} mr="1rem">
            Cancelar
          </Button>
          <Button colorScheme="brand" onClick={onClose}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
