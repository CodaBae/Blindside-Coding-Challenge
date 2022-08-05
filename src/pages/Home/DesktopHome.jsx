import React, { useState } from "react";
import { Box, Text, Flex, Icon, useTheme, HStack } from "@chakra-ui/react";
import Layout from "../../component/Layout";
import Jumanji from "../../assets/jumanji.jpeg";
import { BsPlusLg } from "react-icons/bs";
import FAST_FURIUS from "../../assets/f5.jpeg";
import GOT from "../../assets/got.jpeg";
import YOU from "../../assets/you.jpeg";
import JOHN from "../../assets/JW.jpeg";
import { useNavigate } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const DesktopHome = () => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState({});

  return (
    <Box p={20}>
      <Box
        bgImage={Jumanji}
        width="100%"
        height={400}
        borderRadius={20}
        bgSize="cover"
      >
        <Flex align="flex-end" height="100%" w="100%" color="#fff" p={15}>
          <Box mb={20} mr={5}>
            <Text fontSize={30} fontWeight={500}>
              Jumanji
            </Text>
            <Text fontSize={14}>Action - Thriller - Comedy</Text>
            <HStack>
              <Flex
                width={200}
                height="44px"
                bgColor="#D22F26"
                borderRadius={10}
                color="#fff"
                align="center"
                justify="center"
              >
                <Text fontSize={16}>Watch Now</Text>
              </Flex>
              <Flex
                height="44px"
                width="44px"
                bgColor="#8D8D8D"
                borderRadius={10}
                justify="center"
                align="center"
              >
                <Icon as={BsPlusLg} w={8} h={8} color="#fff" />
              </Flex>
            </HStack>
          </Box>
        </Flex>
      </Box>
      <Flex width="100%" justify="space-between" pt={30}>
        {[
          { title: "John Wick", img: JOHN },
          { title: "Fast Five", img: FAST_FURIUS },
          { title: "You", img: YOU },
          { title: "Game of Thrones", img: GOT },
        ].map((element, idx) => {
          const title = element.title;
          return (
            <Flex flexDir="column" w="22%">
              <Box
                bgSize="cover"
                bgImage={element.img}
                height={230}
                width="100%"
                borderRadius={10}
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
                mt={10}
                align="center"
                justify="center"
                onClick={() => navigate("/details")}
                height="50px"
              >
                <Text color="#fff">{element.title}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default DesktopHome;
