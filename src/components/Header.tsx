import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import PlayButton from "./PlayButton";

const Header = () => {
  return (
    <Flex
      position="fixed"
      zIndex="2"
      width="100%"
      p="16px"
      bg="orange.800"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="white" px="60px">
        lo-fi nerdfighter art
      </Heading>
      <PlayButton />
    </Flex>
  );
};

export default Header;
