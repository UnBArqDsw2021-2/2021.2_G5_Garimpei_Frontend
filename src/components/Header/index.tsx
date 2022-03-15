import { Flex, Input, Box, Image, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';
import { ButtonComponent } from "../Button";

export function HeaderComponent() {
    return(
        <Box bg="brand.500" h="5.625rem">
            <Flex align="center" h="5.625rem" maxW="1120px" mx="auto">
                <Image src="/svgs/logo.svg" alt="Logo garimpei" w="3.75rem" h="3.75rem" />
                
                <InputGroup w="40.625rem">
                    <Input placeholder='Pesquisar por categoria, produto ou marca...' 
                        bg="white" h="3.75rem" ml="2rem"/>
                    <InputRightElement h="100%" children={<FiSearch/>} />
                </InputGroup>
                <Box ml="auto">
                    <ButtonComponent>entrar</ButtonComponent>
                    <ButtonComponent color="dark">cadastrar</ButtonComponent>
                </Box>
            </Flex>
        </Box>
    )
}