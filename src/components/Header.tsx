import {
  Flex,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Avatar,
  AvatarBadge,
  Badge,
  Link
} from "@chakra-ui/react";
import { FaSearch, FaAngleDown, FaBell } from "react-icons/fa";
export const Header = () => {
  return (
    <Flex bg="gray.50" h="100%" pl="8" pr="10" align="center" justify="space-between">
      <Stack direction="row" align="center">
        <Flex
          w="7"
          h="7"
          direction="row"
          borderRadius="50%"
          bg="gray.700"
          align="center"
          justify="center"
        >
          <Text color="gray.100" fontFamily="body" fontWeight="700" fontSize='lg'>
            R
          </Text>
        </Flex>
        <Text color="gray.800" fontFamily="body" ml="2" fontWeight="700" fontSize='lg'>
          PDV
        </Text>
      </Stack>

      <Stack direction="row" align="center">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<Icon as={FaSearch} color="gray.150" ml="2" />}
          />
          <Input
            placeholder="Pesquisar"
            size="md"
            borderRadius="20"
            bg="gray.300"
          />

          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={
              <Icon as={FaAngleDown} color="gray.150" mr="2" w={19} h={19} />
            }
          />
        </InputGroup>
        <Link display="flex">
        <Icon as={FaBell} color="gray.150" mr="2" w={22} h={22} />
        
        <Badge colorScheme='red'borderRadius="50%" alignItems="center" justifyContent="center" w={4} h={4}>5</Badge>
        </Link>

        <Avatar w={8} h={8} name="Dan Abrahmov" src="https://bit.ly/dan-abramov"/>

      </Stack>
    </Flex>
  );
};
