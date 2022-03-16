import { 
    Flex, 
    Input, 
    Box, 
    Image, 
    InputGroup, 
    InputRightElement, 
    GridItem, 
    Grid, 
    Link, 
    Text 
} from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';
import { ButtonComponent } from "../Button";

export function HeaderComponent() {
    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
        <Box bg="brand.500" h="5.625rem">
            <Flex align="center" h="5.625rem" maxW="1120px" mx="auto">
                <Image src="/svgs/logo.svg" alt="Logo garimpei" w="3.75rem" h="3.75rem" />
                
                <InputGroup w="40.625rem">
                    <Input placeholder='Pesquisar por categoria, produto ou marca...' 
                        bg="white" h="3.75rem" ml="2rem"/>
                    <InputRightElement h="100%" mr={2} children={<FiSearch size={25}/>} />
                </InputGroup>
                
                <Flex  align="center" ml="auto">
                    <Image src="/svgs/user.svg" alt="Logo garimpei" h="30" />
                    <Box ml='2'>
                        <Text lineHeight="5" color="#ECECEC"><Link href="#">minha<br></br>conta</Link></Text>
                    </Box>
                </Flex>

                <Flex  align="center" ml="3rem">
                    <Image src="/svgs/heart.svg" alt="Logo garimpei" h="30" />
                    <Box ml='2'>
                        <Text lineHeight="5" color="#ECECEC"><Link href="#">meus<br></br>favoritos</Link></Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    ) : (
        <Box bg="brand.500" h="5.625rem">
            <Flex align="center" h="5.625rem" maxW="1120px" mx="auto">
                <Image src="/svgs/logo.svg" alt="Logo garimpei" w="3.75rem" h="3.75rem" />
                
                <InputGroup w="40.625rem">
                    <Input placeholder='Pesquisar por categoria, produto ou marca...' 
                        bg="white" h="3.75rem" ml="2rem"/>
                    <InputRightElement h="100%" mr={2} children={<FiSearch size={25}/>} />
                </InputGroup>

                <Grid templateColumns='repeat(2, 1fr)' ml="auto">
                    <GridItem>
                        <ButtonComponent>entrar</ButtonComponent>
                    </GridItem>
                    <GridItem ml="0.5rem">
                        <ButtonComponent color="dark">cadastrar</ButtonComponent>
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    )
}