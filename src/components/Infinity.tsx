import React from "react";
import Picture from "./Picture";
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
    <Picture
      link="https://www.pinterest.com/pin/306878162082282214/"
      description="to infinity and beyond"
    >
      <Image fluid={fluid} />
    </Picture>
  );
};

export default FrenchTheLlama;
