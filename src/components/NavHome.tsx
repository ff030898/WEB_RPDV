import {
    Flex,
    Text,
    Stack,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Icon,
    Avatar,
    AvatarBadge,
    Badge,
    Link,
    Button
} from "@chakra-ui/react";
import NextLink from 'next/link'

export const NavHome = () => {
    return (
        <Box w='100%' h="100%" px={32} py={8} display='flex' alignItems='center' flexDirection='row'>
             <Link fontWeight='600' color="white" as={NextLink} href='/' >
            <Stack direction="row" align="center" justifyContent='flex-start' flex={1} mt='-1%' cursor='pointer'>
                <Flex
                    w="7"
                    h="7"
                    direction="row"
                    borderRadius="50%"
                    bg='white'
                    align="center"
                    justify="center"
                >
                    <Text color="gray.900" fontFamily="body" fontWeight="700" fontSize='lg'>
                        R
                    </Text>
                </Flex>
                <Text color="white" fontFamily="body" ml="2" fontWeight="700" fontSize='lg'>
                    PDV
                </Text>
            </Stack>
            </Link>

            <Box flex={1} display='flex' alignItems='center' gap={8} justifyContent='flex-start' ml={2}>
            <Link fontWeight='600' color="white" as={NextLink} href='/' >
                        <Text fontWeight='600' color='#F8F8F9' cursor='pointer'>Home</Text>
                    </Link>
                    <Link fontWeight='600' color="white" as={NextLink} href='/servicos' cursor='pointer'>
                    <Text fontWeight='600' color='#F8F8F9' opacity={0.5} cursor='pointer'>Serviços</Text>
                    </Link>
                    <Link fontWeight='600' color="white" as={NextLink} href='/planos' cursor='pointer'>
                        <Text fontWeight='600' color='#F8F8F9' opacity={0.5} cursor='pointer'>Planos</Text>
                    </Link>
                    <Link fontWeight='600' color="white" as={NextLink} href='/recursos' cursor='pointer'>
                        <Text fontWeight='600' color='#F8F8F9' opacity={0.5} cursor='pointer'>Recursos</Text>
                    </Link>
                  
            </Box>
            <Box flex={1} display='flex' alignItems='center' gap={8} justifyContent='flex-end'>
                <Text color='#fff' cursor='pointer'>Entrar</Text>
                <Button colorScheme="gray">Cadastrar</Button>
            </Box>


        </Box>
    );
};
