import React from "react";
import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import SideBar from "./SideMenu";
import Footer from "./Footer";
import Home from "../pages/Home/home";

const MobileLayout = ({children}) => {
  const theme = useTheme();
  const {
    colors: {
      brand: { mobile_bg },
    },
  } = theme;

  return (
    <Flex bgColor={mobile_bg}>
      <Box w="100%" bgColor={mobile_bg} h="50px" pos="fixed" top="0">
        <SideBar />
      </Box>
      <Box mt={20}>
        {children}
      </Box>
      <Box w="100%" bgColor={mobile_bg} h="50px" pos="fixed" bottom={0}>
        <Footer />
      </Box>
    </Flex>
  );
};

export default MobileLayout;
