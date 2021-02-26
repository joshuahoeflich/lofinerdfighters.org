import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "anglerfish.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Anglerfish: React.FC = () => {
  const {
    fileName: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <a href="https://www.pinterest.com/pin/55732114110729372/">
      <Flex p="48px" flexDirection="column" alignItems="center">
        <Box
          height={["128px", "300px", "300px", "300px"]}
          width={["128px", "300px", "300px", "300px"]}
        >
          <Image fluid={fluid} />
        </Box>
        <Text fontSize="36px">anglerfish</Text>
      </Flex>
    </a>
  );
};

export default Anglerfish;
