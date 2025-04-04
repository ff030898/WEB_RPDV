import { Box, Button, Image as ImageChakra, Container, Flex, Grid, GridItem, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { NavHome } from "../components/NavHome";
import Image from "next/image";

export default function Home() {
  return (
    <Box bg='#F8F8F9'>
      <Box bg='linear-gradient(180deg, #4285F4 0%, #5776E5 100%)'>
        <NavHome />
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' m={8} p={8}>
          <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Text fontWeight='600' color='#fff' fontSize='5xl' mb={1}>Cansado de ouvir reclamações?</Text>
            <Text fontWeight='600' color='#fff' fontSize='5xl'>Nós temos a solução!</Text>
            <Text color='#fff' fontSize='1xl' mt={8}>Uma plataforma completa para agilizar, atender, e gerenciar todos os</Text>
            <Text color='#fff' fontSize='1xl' mt={2}> pedidos ou vendas do seu negócio de uma forma simples e eficaz.</Text>
          </Box>
          <Button colorScheme="gray" size='lg' mt={8} mb={80} py={8}>EXPERIMENTAR GRÁTIS</Button>
        </Box>




      </Box>

      <Box width='100%' display='flex' alignItems='center' justifyContent='center' mt='-20%' mb={24} >
        <ImageChakra width='75%' height='75%' src="/images/Orders.png" borderRadius={8} background='rgba( 255, 255, 255, 0.85 )' boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.57 )' backdrop-filter='blur( 13.5px )' />
      </Box>

      <Box display='flex' alignItems='center' justifyContent='center' mb={16} flexDirection='column'>
        <Box mb={32}>
          <Text color='#333333' fontWeight='600' fontSize='2xl' mb={2} align='center'>Nossos serviços</Text>
          <Text color='#66788A' fontSize='2xl' align='center'>Lorem insput lorem insput, lorem insput</Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' gap={8} w='70%'>
          <Box display='flex' alignItems='center' justifyContent='center' flex={1} flexDirection='column' borderRadius={8} background='rgba( 255, 255, 255, 0.85 )' border='1px solid rgba( 255, 255, 255, 0.18 )' boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.57 )' backdrop-filter='blur( 13.5px )'>
            <ImageChakra w='35%' h='35%' src="/images/suporte.png" mt={8} />
            <Text color='#333333' fontWeight='600' my={4} fontSize='lg'>Suporte</Text>
            <Text mx={8} mb={8}>Even the all-powerful Pointing has no control about</Text>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' flex={1} flexDirection='column' borderRadius={8} background='rgba( 255, 255, 255, 0.85 )' border='1px solid rgba( 255, 255, 255, 0.18 )' boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.57 )' backdrop-filter='blur( 13.5px )'>
            <ImageChakra w='35%' h='35%' src="/images/backup.png" mt={8} />
            <Text color='#333333' fontWeight='600' my={4} fontSize='lg'>Backup</Text>
            <Text mx={8} mb={8}>Even the all-powerful Pointing has no control about</Text>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' flex={1} flexDirection='column' borderRadius={8} background='rgba( 255, 255, 255, 0.85 )' border='1px solid rgba( 255, 255, 255, 0.18 )' boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.57 )' backdrop-filter='blur( 13.5px )'>
            <ImageChakra w='35%' h='35%' src="/images/seguranca.png" mt={8} />
            <Text color='#333333' fontWeight='600' my={4} fontSize='lg'>Segurança</Text>
            <Text mx={8} mb={8}>Even the all-powerful Pointing has no control about</Text>
          </Box>
        </Box>
      </Box>

      <Box display='flex' alignItems='center' justifyContent='center' mb={32} flexDirection='column'>
        <Box display='flex' alignItems='center' justifyContent='center' gap={8} w='70%'>
          <Box display='flex' alignItems='center' justifyContent='center' flex={1} flexDirection='column' borderRadius={8} background='rgba( 255, 255, 255, 0.85 )' border='1px solid rgba( 255, 255, 255, 0.18 )' boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.57 )' backdrop-filter='blur( 13.5px )'>
            <ImageChakra w='35%' h='35%' src="/images/relatorio.png" mt={8} />
            <Text color='#333333' fontWeight='600' my={4} fontSize='lg'>Relatórios</Text>
            <Text mx={8} mb={8}>Even the all-powerful Pointing has no control about</Text>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' flex={1} flexDirection='column' borderRadius={8} background='rgba( 255, 255, 255, 0.85 )' border='1px solid rgba( 255, 255, 255, 0.18 )' boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.57 )' backdrop-filter='blur( 13.5px )'>
            <ImageChakra w='35%' h='35%' src="/images/manual.png" mt={8} />
            <Text color='#333333' fontWeight='600' my={4} fontSize='lg'>Manual</Text>
            <Text mx={8} mb={8}>Even the all-powerful Pointing has no control about</Text>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' flex={1} flexDirection='column' borderRadius={8} background='rgba( 255, 255, 255, 0.85 )' border='1px solid rgba( 255, 255, 255, 0.18 )' boxShadow='0 8px 32px 0 rgba( 31, 38, 135, 0.57 )' backdrop-filter='blur( 13.5px )'>
            <ImageChakra w='35%' h='35%' src="/images/privacidade.png" mt={8} />
            <Text color='#333333' fontWeight='600' my={4} fontSize='lg'>Privacidade</Text>
            <Text mx={8} mb={8}>Even the all-powerful Pointing has no control about</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );

};
