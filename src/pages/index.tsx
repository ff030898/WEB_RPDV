import { Grid, GridItem, Text, Flex, Stack, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

const Home: NextPage = () => {
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
      </GridItem>
    </Grid>
  );
};

export default Home;
