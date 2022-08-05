import React from "react";
import { Box, Text, Flex, useTheme, Button } from "@chakra-ui/react";
import Categories from "../../component/categories";
import FAST_FURIUS from "../../assets/f5.jpeg";
import GOT from "../../assets/got.jpeg";
import YOU from "../../assets/you.jpeg";
import JOHN from "../../assets/JW.jpeg";
import Comment from "./coment";
import Layout from "../../component/Layout";
import View from "./viewComment";

const MobileDetails = () => {
  const theme = useTheme();
  const {
    colors: {
      brand: { white, mobile_bg },
    },
  } = theme;
  return (
    <Layout>
      <Box w='100%' bgColor={mobile_bg} p={8}>
        <Box bgImage={JOHN} height={400} bgSize="cover" borderRadius={20}></Box>
        <Box color={white} mt={7} p={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          aliquam, reprehenderit soluta laboriosam ut eos ex consectetur,
        </Box>
        <Flex justify="space-between">
          <Comment />
          <View />
        </Flex>
        <Categories title="Similar Movies">
          {[
            { title: "John Wick", img: JOHN },
            { title: "Fast Five", img: FAST_FURIUS },
            { title: "You", img: YOU },
            { title: "Game of Thrones", img: GOT },
          ].map((element, idx) => {
            const title = element.title;
            return (
              <Box
                key={idx}
                borderRadius={20}
                height={240}
                w="47%"
                bgSize="cover"
                mb={10}
                bgImage={element.img}
              ></Box>
            );
          })}
        </Categories>
      </Box>
    </Layout>
  );
};

export default MobileDetails;
