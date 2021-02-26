import React from "react";
import { css } from "linaria";

interface ContainerProps {
  children: React.ReactNode;
  link: string;
  description: string;
  imageContainerClass?: string;
}

const pictureTopContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
`;

const pictureImageContainer = css`
  width: 300px;
  padding-bottom: 10px;
  @media only screen and (max-width: 400px) {
    width: 128px;
  }
`;

const pictureDescription = css`
  font-size: 36px;
`;

const Picture: React.FC<ContainerProps> = ({
  link,
  children,
  description,
  imageContainerClass,
}) => {
  return (
    <a href={link}>
      <div className={pictureTopContainer}>
        <div className={imageContainerClass}>{children}</div>
        <p className={pictureDescription}>{description}</p>
      </div>
    </a>
  );
};

Picture.defaultProps = {
  imageContainerClass: pictureImageContainer,
};

export default Picture;
