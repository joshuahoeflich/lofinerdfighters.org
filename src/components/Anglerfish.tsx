import React from "react";
import Picture from "./Picture";
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
    <Picture
      link="https://www.pinterest.com/pin/55732114110729372/"
      description="anglerfish"
    >
      <Image fluid={fluid} />
    </Picture>
  );
};

export default Anglerfish;
