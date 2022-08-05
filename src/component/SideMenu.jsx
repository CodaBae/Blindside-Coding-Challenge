import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Flex,
  Icon,
  HStack,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex
        height="100%"
        alignItems="center"
        p="0px 20px"
        justify="space-between"
      >
        <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <Icon color="#fff" h={8} w={8} as={GiHamburgerMenu} />
        </Box>
        <Box>
          <HStack gap={4}>
            <Icon color="#fff" h={8} w={8} as={BsSearch} />
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
