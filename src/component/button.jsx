import React from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

const CustomButton = ({onClick, action, isLoading }) => {
  return (
    <Button
      width={{
        md: "400px",
        base: "90%",
      }}
      isLoading={isLoading}
      onClick={onClick}
      height='40px'
      rightIcon={<AiOutlineArrowRight />}
      colorScheme="teal"
      variant="outline"
    >
      {action}
    </Button>
  );
};

export default CustomButton;
