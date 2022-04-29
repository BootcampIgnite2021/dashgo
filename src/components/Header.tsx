import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchEyeLine, RiUserAddLine } from 'react-icons/ri'

export default function Header(){
    return(
        <Flex as="header" width="100%" maxWidth={1480} height="20"
        marginX="auto" marginTop="4" paddingX="6" align="center"
        >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight"
            width="64"
            >
                Dashboard
                <Text as="span" marginLeft="1" color="pink.500">.</Text>
            </Text>

            <Flex as="label" flex="1" paddingY="4" paddingX="8"
            marginLeft="6" maxWidth={400} alignSelf="center" color="gray.200"
            position="relative" bg="gray.800" borderRadius="full"
            >

                <Input color="gray.50" variant="unstyled"
                placeholder="Buscar na plataforma"
                paddingX="4"
                marginX="4"
                _placeholder={{color:'gray.400'}}
                />
                <Icon as={RiSearchEyeLine} fontSize="20"/>

            </Flex>

            <Flex
            align="center"
            marginLeft="auto"
            >
                <HStack spacing="8" marginX="8" paddingRight="8"
                paddingY="1"
                color="gray.300"
                borderRightWidth={1}
                borderColor="gray.700"
                >
                <Icon as={RiNotificationLine} fontSize="20" />
                <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Rafael Ribeiro</Text>
                        <Text color="gray.300"
                        fontSize="small"
                        >Rafael@gmail.com</Text>
                    </Box>

                    <Avatar size="md" 
                    name="Rafael Ribeiro"
                    src="https://github.com/RaffahOlive.png"
                    />

                </Flex>
            </Flex>
        </Flex>
    );
}