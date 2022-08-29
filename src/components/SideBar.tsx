import { Link, Flex, Icon, Stack, WrapItem, Avatar } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";

export const SideBar = () => {
  return (
    <Flex backgroundColor="blue.500" h="100%" direction="row" justify="center">
      <Stack spacing="4" mt="2" align="center">
        <Link>
          <WrapItem>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="sm" />
          </WrapItem>
        </Link>
        <Link>
          <Icon as={RiDashboardLine} fontSize="18" color="gray.100" />
        </Link>

        <Link>
          <Icon as={RiDashboardLine} fontSize="18" color="gray.100" />
        </Link>

        <Link>
          <Icon as={RiDashboardLine} fontSize="18" color="gray.100" />
        </Link>
      </Stack>
    </Flex>
  );
};
