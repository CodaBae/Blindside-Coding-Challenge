import React from "react";
import { Box, Text, Flex, Icon, HStack } from '@chakra-ui/react';
import nav from "./sidebar";


const SideNav = () => {
    return (
        <>
            {
                nav.map((element, idx) => (
                    <Flex
                        width='100%'
                    >
                        <HStack gap={4} p='40px 30px 0px 20px'>
                            <Icon as={element.icon} color='red' h={7} w={7} />
                            <Text>{element.tab}</Text>
                        </HStack>
                       
                    </Flex>
                ))
            }
        </>
    )
}

export default SideNav