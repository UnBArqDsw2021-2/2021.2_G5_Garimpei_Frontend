import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ConfirmationModal } from "./ConfirmationModal";

interface CommunityUserProps {
  avatarURL: string;
  userID: string;
  username: string;
}

export function CommunityUser({
  username,
  userID,
  avatarURL,
}: CommunityUserProps) {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="0.75rem"
      >
        <Avatar
          position="relative"
          size="2xl"
          name={username}
          src={avatarURL}
          boxShadow="xl"
        >
          <Flex
            position="absolute"
            top="-0.75rem"
            right="0"
            border="1px solid black"
            py="0.35rem"
            px="0.5rem"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            color="black"
            _hover={{
              bg: "brand.500",
              borderColor: "white",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setShowConfirmationModal(true)}
          >
            <Text fontSize="sm" lineHeight="1">
              x
            </Text>
          </Flex>
        </Avatar>
        <Text fontSize="sm" lineHeight="1" fontWeight="bold" color="brand.500">
          {username}
        </Text>
      </Flex>

      {showConfirmationModal && (
        <ConfirmationModal
          userID={userID}
          username={username}
          isOpen={showConfirmationModal}
          onClose={() => setShowConfirmationModal(false)}
        />
      )}
    </>
  );
}
