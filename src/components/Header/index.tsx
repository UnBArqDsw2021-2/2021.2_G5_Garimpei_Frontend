import { Flex, Input, Text, Box, Image, InputGroup, InputRightElement, IconButton  } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';

export function HeaderComponent() {
    return(
        <Box bg="brand.500" h="5.625rem">
            <Flex align="center" h="5.625rem" maxW="1120px" margin="0 auto">
                <Image src="/svgs/logo.svg" alt="Logo garimpei" w="3.75rem" h="3.75rem" />
                
            

            </Flex>
        </Box>
    )
}