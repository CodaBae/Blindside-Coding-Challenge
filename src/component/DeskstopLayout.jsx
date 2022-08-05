import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import SideNav from "./SideNav";
import LeftNav from "./LeftBar";

const DesktopLayout = ({ children }) => {
  return (
    <Flex>
      <Box width="20%">
        <SideNav />
      </Box>
      <Box width="60%">{children}</Box>
      <Box width="20%">
        <LeftNav />
      </Box>
    </Flex>
  );
};

export default DesktopLayout;
