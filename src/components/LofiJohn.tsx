import React from "react";
import { Flex, Text } from "@chakra-ui/react";
// @ts-ignore
import John from "../images/john.gif";

const LofiJohn: React.FC = () => {
  return (
    <Flex p="48px">
      <a href="https://www.reddit.com/r/nerdfighters/comments/laqtwq/lofi_john/">
        <Flex
          flexDirection="column"
          alignItems="center"
          maxWidth="700px"
          maxHeight="700px"
        >
          <img src={John} alt="John signing his name." />
          <Text fontSize="36px">lo-fi john</Text>
        </Flex>
      </a>
    </Flex>
  );
};

export default LofiJohn;
