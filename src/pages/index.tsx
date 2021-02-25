import React from "react";
import Seo from "../components/SEO";
import { Flex, Fade, Heading } from "@chakra-ui/react";

const HomePage: React.FC = () => {
  return (
    <>
      <Seo />
      <Fade in>
        <Flex
          width="100%"
          height="100%"
          flexDirection="column"
          alignItems="center"
        >
          <Flex width="100%" p="16px" bg="orange.800" justifyContent="center">
            <Heading color="white">lo-fi nerdfighters</Heading>
          </Flex>
        </Flex>
      </Fade>
    </>
  );
};

export default HomePage;
