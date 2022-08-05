import React from "react";
import { Text, Box, Flex, Image, Input, VStack } from "@chakra-ui/react";
import Layout from "../../component/Layout";
import FF from "../../assets/f5.jpeg";
import PLAY from "../../assets/play.png";

const DesktopDetails = () => {
  return (
    <Layout>
      <Box pt={20}>
        <Box
          bgSize="cover"
          borderRadius={20}
          height={400}
          width="90%"
          bgImage={FF}
        >
          <Flex
            borderRadius={20}
            height={400}
            width="100%"
            align="center"
            justify="center"
            bgColor="rgba(0,0,0,0.4)"
          >
            <Flex
              borderRadius={10}
              bgColor="#BB15BD"
              w="70px"
              h="70px"
              align="center"
              justify="center"
            >
              <Image src={PLAY} h="40px" w="40px" />
            </Flex>
          </Flex>
        </Box>

        <Box
            pt={20}
            width='90%'
        >
          <Input fontSize={16} variant="flushed" placeholder="Add Comment" />
          <VStack pt={30} align='flex-start'>
            <Text>
                Hello World
            </Text>
            <Text>
                Hello World
            </Text>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
};

export default DesktopDetails;
