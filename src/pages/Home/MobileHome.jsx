import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  useTheme,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Icon,
} from "@chakra-ui/react";
import Carousel from "framer-motion-carousel";
import IMG from "../Auth/movies.png";
import Categories from "../../component/categories";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FAST_FURIUS from "../../assets/f5.jpeg";
import GOT from "../../assets/got.jpeg";
import YOU from "../../assets/you.jpeg";
import JOHN from "../../assets/JW.jpeg";
import Layout from "../../component/Layout";
import { useNavigate } from "react-router-dom";

const MobileHome = () => {
  const [liked, setLiked] = useState({});
  const likes = [];
  const navigation = useNavigate();
  const theme = useTheme();
  const {
    colors: {
      brand: { white, primary, btn },
    },
  } = theme;

  return (
    <Layout>
      <>
        <Box mb="80px" width="100vw" p={6}>
          <Flex width="100%" gap={5}>
            {["All", "Series", "Drama", "Hollywood"].map((element, idx) => (
              <Text color={white} key={idx}>
                {element}
              </Text>
            ))}
          </Flex>
          <Tabs width="90vw" pt={10} variant="unstyled">
            <TabList
              bgColor="#37274B"
              borderRadius={10}
              h="40px"
              color="#AA94A2"
              fontWeight={300}
              fontSize={15}
              width="100%"
              border="0.1px solid #fff"
            >
              <Tab
                width="30vw"
                borderRadius={10}
                _selected={{ color: "white", bg: primary }}
              >
                Popular
              </Tab>
              <Tab
                width="30vw"
                borderRadius={10}
                _selected={{ color: "white", bg: "green.400" }}
              >
                Trending
              </Tab>
              <Tab
                width="30vw"
                borderRadius={10}
                _selected={{ color: "white", bg: "green.400" }}
              >
                Soon
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Carousel
            renderArrowRight={() => null}
            renderArrowLeft={() => null}
            renderDots={() => null}
          >
            {[1, 2, 3, 4].map((item, i) => (
              <Image
                draggable="false"
                src={IMG}
                key={i}
                borderRadius={15}
                height={200}
                width="100%"
                alt=""
              />
            ))}
          </Carousel>
          <Categories title="Curated for you">
            {[
              { title: "John Wick", img: JOHN },
              { title: "Fast Five", img: FAST_FURIUS },
              { title: "You", img: YOU },
              { title: "Game of Thrones", img: GOT },
            ].map((element, idx) => {
              const title = element.title;
              return (
                <Flex mb={10} flexDir="column" w="47%">
                  <Box
                    key={idx}
                    borderRadius={20}
                    height={240}
                    width="100%"
                    bgSize="cover"
                    mb={10}
                    bgImage={element.img}
                  >
                    <Flex justify="space-between" p="10px">
                      <Box />
                      <Box>
                        <Icon
                          onClick={() =>
                            setLiked({ ...liked, [title]: !liked[title] })
                          }
                          as={liked[title] ? AiFillHeart : AiOutlineHeart}
                          h={8}
                          w={8}
                          color={"#FC1313"}
                        />
                      </Box>
                    </Flex>
                  </Box>
                  <Flex
                    width="100%"
                    fontWeight={300}
                    bgColor="#BB15BD"
                    borderRadius={15}
                    align="center"
                    justify="center"
                    onClick={() => navigation("/details")}
                    height="50px"
                  >
                    <Text color="#fff">{element.title}</Text>
                  </Flex>
                </Flex>
              );
            })}
          </Categories>
        </Box>
      </>
    </Layout>
  );
};

export default MobileHome;
