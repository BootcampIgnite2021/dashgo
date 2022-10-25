import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useDrawerSidebarNav } from "../../hooks/drawer";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Porfile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { toggle } = useDrawerSidebarNav();

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={toggle}
          mr="2"
          mt="2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" marginLeft="auto">
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
