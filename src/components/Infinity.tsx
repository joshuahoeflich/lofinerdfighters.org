import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "infinity.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const FrenchTheLlama: React.FC = () => {
  const {
    fileName: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <a href="https://www.pinterest.com/pin/306878162082282214/">
      <Flex p="48px" flexDirection="column" alignItems="center">
        <Box width={["128px", "300px", "300px", "300px"]}>
          <Image fluid={fluid} />
        </Box>
        <Text fontSize="36px">to infinity and beyond</Text>
      </Flex>
    </a>
  );
};

export default FrenchTheLlama;
