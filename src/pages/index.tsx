import React from "react";
import Seo from "../components/SEO";
import { Flex, Heading, Fade } from "@chakra-ui/react";
import PlayButton from "../components/PlayButton";
import LofiJohn from "../components/LofiJohn";
import Anglerfish from "../components/Anglerfish";
import Circles from "../components/Circles";
import FrenchTheLlama from "../components/FrenchTheLlama";
import PizzaJohn from "../components/PizzaJohn";
import Infinity from "../components/Infinity";

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

const HomeBody: React.FC = () => {
  return (
    <Fade in>
      <Header />
      <Flex width="100%" height="100%" flexDirection="column" py="64px">
        <Flex flexWrap="wrap" justifyContent="center">
          <LofiJohn />
          <Anglerfish />
          <FrenchTheLlama />
          <PizzaJohn />
          <Circles />
          <Infinity />
        </Flex>
      </Flex>
    </Fade>
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
