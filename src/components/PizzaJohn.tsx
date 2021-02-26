import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Picture from "./Picture";
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
    <Picture
      link="https://www.reddit.com/r/nerdfighters/comments/iecb4p/pizza_john_of_circles_people_on_tiktok_liked_it/"
      description="pizza john"
    >
      <Image fluid={fluid} />
    </Picture>
  );
};

export default FrenchTheLlama;
