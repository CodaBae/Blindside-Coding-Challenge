import React from "react";
import { Text, Box, Flex, Input, Image, VStack } from "@chakra-ui/react";
import JW from "../assets/JW.jpeg";

const LeftNav = () => {
  return (
    <Box mt={20} mr={20}>
      <Box>
        <Input
          height="40px"
          fontSize={18}
          borderRadius={10}
          value="search"
          placeholder="Search"
        />
      </Box>
      <Text pt={10}>Popular Movies</Text>
      <Flex pt={5} gap={5} flexDir="column">
        {[1, 2, 3].map((element, idx) => (
          <Flex key={idx}>
            <Image src={JW} height={120} borderRadius={15} width={100} />
            <VStack ml={5} align="flex-start">
              <Text fontSize={15}>John Wick</Text>
              <Text>Action - Thriller</Text>
              <Text fontWeight="bold">IMDB - 7.3</Text>
            </VStack>
          </Flex>
        ))}
      </Flex>
      <Flex
        width='100%'
        height="44px"
        mt={10}
        bgColor="#D22F26"
        borderRadius={10}
        color="#fff"
        align="center"
        justify="center"
      >
        <Text fontSize={16}>Show All</Text>
      </Flex>
    </Box>
  );
};

export default LeftNav;
