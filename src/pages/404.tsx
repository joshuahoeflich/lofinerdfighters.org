import React from "react";
import Seo from "../components/SEO";
import { Flex, Text, Link } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
// @ts-ignore
import John from "../images/john.gif";
import Header from "../components/Header";

const NotFound: React.FC = () => {
  return (
    <Fade direction="left">
      <Flex
        width="100%"
        height="100%"
        flexDirection="column"
        py="128px"
        alignItems="center"
        justifyContent="center"
      >
        <img src={John} alt="John signing his name." />
        <Text py="8px" fontSize="36px">
          not found
        </Text>
        <Link fontSize="28px" href="/">
          go home
        </Link>
      </Flex>
    </Fade>
  );
};

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Seo />
      <Header />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
