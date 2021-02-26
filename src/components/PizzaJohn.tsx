import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "pizzacircles.jpg" }) {
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
    <a href="https://www.reddit.com/r/nerdfighters/comments/iecb4p/pizza_john_of_circles_people_on_tiktok_liked_it/">
      <Flex p="48px" flexDirection="column" alignItems="center">
        <Box width={["128px", "300px", "300px", "300px"]}>
          <Image fluid={fluid} />
        </Box>
        <Text fontSize="36px">pizza john</Text>
      </Flex>
    </a>
  );
};

export default FrenchTheLlama;
