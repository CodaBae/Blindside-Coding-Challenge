import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";

const Categories = ({ title, children }) => {
  return (
    <Box w='90vw'>
      <Text fontWeight={500} pt={30} fontSize={18} color='#fff'>{title}</Text>
      <Flex flexWrap='wrap' justify='space-between' width='90vw'>{children}</Flex>
    </Box>
  );
};

export default Categories;
