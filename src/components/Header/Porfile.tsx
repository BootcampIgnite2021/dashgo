import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Francisco Júnior</Text>
          <Text color="gray.300" fontSize="small">
            franciscojn49@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Francisco Júnior"
        src="https://github.com/franciscojunior10.png"
      />
    </Flex>
  );
}
