import { Flex, Icon, Input, InputAddon, InputGroup } from "@chakra-ui/react";
import { RiSearchEyeLine } from "react-icons/ri";
import { createContext } from "vm";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="8"
      marginLeft="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      alignItems="center"
      justifyContent="center"
    >
      <Input
        border="none"
        color="gray.50"
        placeholder="Buscar na plataforma"
        paddingX="4"
        marginX="4"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchEyeLine} fontSize="20" alignItems="center" />
    </Flex>
  );
}
