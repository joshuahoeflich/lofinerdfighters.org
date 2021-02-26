import React from "react";
import Picture from "./Picture";
import { css } from "linaria";
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

const pictureImageContainer = css`
  width: 512px;
  padding-bottom: 10px;
  @media only screen and (max-width: 400px) {
    width: 128px;
  }
`;

const Circles: React.FC = () => {
  const {
    fileName: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <Picture
      link="https://www.reddit.com/r/nerdfighters/comments/j6dxy0/im_late_on_the_circles_train_but_its_such_a/"
      description="circles"
      imageContainerClass={pictureImageContainer}
    >
      <Image fluid={fluid} />
    </Picture>
  );
};

export default Circles;
