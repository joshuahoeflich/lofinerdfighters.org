import React from "react";
import { css } from "linaria";
// @ts-ignore
import John from "../images/john.gif";

const imageDescripton = css`
  font-size: 36px;
  text-align: center;
`;

const lofiContainer = css`
  display: flex;
  flex-direction: column;
  padding: 48px;
`;

const gifContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const gif = css`
  width: 700px;
  @media only screen and (max-width: 1000px) {
    width: 700px;
  }
  @media only screen and (max-width: 800px) {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    width: 400px;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
  }
`;

const LofiJohn: React.FC = () => {
  return (
    <a href="https://www.reddit.com/r/nerdfighters/comments/laqtwq/lofi_john/">
      <img src={John} className={gif} alt="John signing his name." />
      <p className={imageDescripton}>lo-fi john</p>
    </a>
  );
};

export default LofiJohn;
