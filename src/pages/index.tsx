import React from "react";
import Seo from "../components/SEO";
import { Flex } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import LofiJohn from "../components/LofiJohn";
import Anglerfish from "../components/Anglerfish";
import Circles from "../components/Circles";
import FrenchTheLlama from "../components/FrenchTheLlama";
import PizzaJohn from "../components/PizzaJohn";
import Infinity from "../components/Infinity";
import Header from "../components/Header";

const HomeBody: React.FC = () => {
  return (
    <Flex width="100%" height="100%" flexDirection="column" py="64px">
      <Flex flexWrap="wrap" justifyContent="center">
        <Fade direction="left">
          <LofiJohn />
          <Anglerfish />
          <FrenchTheLlama />
          <PizzaJohn />
          <Circles />
          <Infinity />
        </Fade>
      </Flex>
    </Flex>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <Seo />
      <Header />
      <HomeBody />
    </>
  );
};

export default HomePage;
