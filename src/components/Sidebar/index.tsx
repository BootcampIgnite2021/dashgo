import {
  Box,
  Stack,
  Text,
  Link,
  Icon,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import {
  DrawerSiderbarNavProvider,
  useDrawerSidebarNav,
} from "../../hooks/drawer";
import { SideBarNav } from "./SideBarNav";

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { open, toggle } = useDrawerSidebarNav();

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={open} placement="left" onClose={toggle}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" width="64" marginRight="8">
      <SideBarNav />
    </Box>
  );
}
