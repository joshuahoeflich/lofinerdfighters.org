import React from "react";
import Picture from "./Picture";
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
    <Picture
      description="french the llama"
      link="https://drawception.com/game/SkHh1NK4z1/french-the-llama/"
    >
      <Image fluid={fluid} />
    </Picture>
  );
};

export default FrenchTheLlama;
