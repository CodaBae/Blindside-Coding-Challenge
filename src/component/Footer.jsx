import React from "react";
import { Flex, Text, Box, Icon, useTheme } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";

const Footer = () => {
  const theme = useTheme();
  const {
    colors: {
      brand: { menu, white },
    },
  } = theme;
  return (
    <Flex w="100%" justify="space-around" align="center" height="100%">
      <Box>
        <Icon as={IoHome} h={10} w={10} color={theme.colors.brand.white} />
      </Box>
      <Flex
        w="70px"
        h="70px"
        mb="50px"
        align="center"
        justify="center"
        borderRadius={50}
        bgColor={menu}
      >
        <Flex align="center" flexWrap='wrap' justify="space-between" w='30px' h='30px'>
          {Array(4)
            .fill(1)
            .map((_, idx) => (
              <Box key={idx} borderRadius={1} w={5} h={5} bgColor={white} />
            ))}
        </Flex>
      </Flex>
      <Box>
        <Icon
          as={AiOutlineSetting}
          h={10}
          w={10}
          color={theme.colors.brand.white}
        />
      </Box>
    </Flex>
  );
};

export default Footer;
