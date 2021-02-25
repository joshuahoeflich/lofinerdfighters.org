import React from "react";
import Seo from "../components/SEO";
import { Flex, Fade, Text } from "@chakra-ui/react";

const HomePage: React.FC = () => {
  return (
    <>
      <Seo />
      <Fade in>
        <Flex
          width="100%"
          height="100%"
          flexDirection="column"
          padding="16px"
          alignItems="center"
        >
          <Text>lo-fi nerdfighters</Text>
        </Flex>
      </Fade>
    </>
  );
};

export default HomePage;
