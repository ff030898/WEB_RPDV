import { Button, Flex, Grid, GridItem, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";

type Order = {
  id: number;
  
}

type HomeProps = {
  order: Order[];
}

export default function Home({ order } : HomeProps) {
  return (
    <Grid
      templateAreas={`"nav header"
                "nav main"
                "nav main"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"60px 1fr"}
      h="100vh"
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"nav"}>
        <SideBar />
      </GridItem>
      <GridItem area={"main"}>
        <Flex m="4" pl="4" pr="6" direction="column">
          
          <Stack spacing="0" flexDir="row" align="center" justify="space-between" mt='3'>
            <Stack spacing="0">
              <Stack flexDirection="row" spacing="0" gap="1">
                <Text fontFamily="body" color="gray.600">
                  CAIXA |
                </Text>
                <Text fontFamily="body" color="gray.800" fontWeight="700">
                  FECHADO
                </Text>
              </Stack>
              <Text color="gray.600" fontWeight="500" fontSize="xs" mt="1">
                O Caixa se encontra fechado no momento
              </Text>
            </Stack>

            <Button colorScheme='blue' size="sm" fontSize="xs" fontWeight="700">NOVO PEDIDO</Button>
            
          </Stack>
        </Flex>
         
        <TableContainer m="4" pl="4" pr="6">
          <Table variant='striped' colorScheme='teal'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th isNumeric>#</Th>
                <Th>Cliente</Th>
                <Th>Telefone</Th>
                <Th>Pagamento</Th>
                <Th>Pago</Th>
                <Th>Data e Hora</Th>
                <Th>Status</Th>
                <Th isNumeric>Total</Th>
                <Th>Data</Th>
              </Tr>
            </Thead>
            <Tbody>
            {order.map((item) => {
            return (
              <Tr key={item.id}>
                <Td isNumeric>{ item.id}</Td>
                <Td isNumeric>{ item.id}</Td>
                <Td isNumeric>{ item.id}</Td>
                <Td isNumeric>{ item.id}</Td>
                <Td isNumeric>{ item.id}</Td>
                <Td isNumeric>{ item.id}</Td>
                <Td isNumeric>{ item.id}</Td>
                <Td isNumeric>{ item.id}</Td>
              </Tr>
            );
          })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
 
      </GridItem>
    </Grid>
  );

};

export const getStaticProps: GetStaticProps = async () => {

  const { data }  = await api.get('/plane')
  const order = data.map((order: Order) => {
    return {
      id: order.id,
    }
  });


  return {
    props: {
      order,
    },
  };
};
