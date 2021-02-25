import React from "react";
import Seo from "../components/SEO";
import { Flex, Heading, Text } from "@chakra-ui/react";
// @ts-ignore
import John from "../images/john.gif";

const LofiJohn: React.FC = () => {
  return (
    <Flex p="48px">
      <a href="https://www.reddit.com/r/nerdfighters/comments/laqtwq/lofi_john/">
        <Flex
          flexDirection="column"
          alignItems="center"
          maxWidth="512px"
          maxHeight="512px"
        >
          <img src={John} alt="John signing his name." />
          <Text fontSize="36px">Lofi John</Text>
        </Flex>
      </a>
    </Flex>
  );
};

const HomeBody: React.FC = () => {
  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Flex width="100%" p="16px" bg="orange.800" justifyContent="center">
        <Heading color="white">lo-fi nerdfighter art</Heading>
      </Flex>
      <Flex flexWrap="wrap">
        <LofiJohn />
        <LofiJohn />
        <LofiJohn />
        <LofiJohn />
        <LofiJohn />
        <LofiJohn />
      </Flex>
    </Flex>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <Seo />
      <HomeBody />
    </>
  );
};

export default HomePage;
