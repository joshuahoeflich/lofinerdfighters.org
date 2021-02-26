import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "circles.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Circles: React.FC = () => {
  const {
    fileName: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <a href="https://www.reddit.com/r/nerdfighters/comments/j6dxy0/im_late_on_the_circles_train_but_its_such_a/">
      <Flex p="48px" flexDirection="column" alignItems="center">
        <Box width={["128px", "428px", "512px", "512px"]}>
          <Image fluid={fluid} />
        </Box>
        <Text fontSize="36px">circles</Text>
      </Flex>
    </a>
  );
};

export default Circles;
