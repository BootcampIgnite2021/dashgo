import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Porfile";
import { SearchBox } from "./SearchBox";

export default function Header() {
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
      <Logo />

      <SearchBox />

      <Flex align="center" marginLeft="auto">
        <NotificationsNav />

        <Profile />
      </Flex>
    </Flex>
  );
}
