import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "frenchthellama.png" }) {
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
    <a href="https://drawception.com/game/SkHh1NK4z1/french-the-llama/">
      <Flex p="48px" flexDirection="column" alignItems="center">
        <Box width={["128px", "300px", "300px", "300px"]}>
          <Image fluid={fluid} />
        </Box>
        <Text fontSize="36px">french the llama</Text>
      </Flex>
    </a>
  );
};

export default FrenchTheLlama;
