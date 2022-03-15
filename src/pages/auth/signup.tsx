import { Box, Flex, Heading, HStack, Image, Input, Text } from "@chakra-ui/react";

export default function SignUp(){
  return (
    <Flex w="full" maxW="1440px" margin="0 auto" boxShadow="2xl">
      <Flex flexDirection="column" alignItems="center" justifyContent="center" bg="brand.500" w="65%" gap="2rem">
        {/* Garimpei Logo */}
        <Image src="/images/logo_with_name_black.png" alt="Garimpei" w="19.125rem" h="auto" />

        <Flex flexDirection="column" alignItems="center" bg="gray.200" py="5.625rem" px="7.375rem" gap="0.75rem">
          <Heading fontSize="2rem" fontWeight="medium" color="text.900">Criar Conta no Garimpei</Heading>

          {/* Social Links */}
          <HStack>
            <Image src="/svgs/google.svg" alt="Google" />
            <Image src="/svgs/facebook.svg" alt="Facebook" />
          </HStack>

          <Text fontSize="1rem" fontWeight="regular" mt="1.75rem">ou utilize seu e-mail:</Text>

          <Input bg="gray.300" placeholder="Seu nome" />
        </Flex>
      </Flex>
      
      {/* ******************* Rightside Image ********************* */}
      <Box w="35%" h="100vh" bgImage="/images/bg_signup.png" />
    </Flex>
  )
}