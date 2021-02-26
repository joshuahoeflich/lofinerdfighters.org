import React from "react";
import { css } from "linaria";
import PlayButton from "./PlayButton";

const container = css`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #7b341e;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const contentContainer = css`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

const header = css`
  text-align: center;
  color: white;
  padding-right: 32px;
  @media only screen and (max-width: 450px) {
    font-size: 20pt;
  }
  @media only screen and (max-width: 350px) {
    font-size: 14pt;
  }
`;

const Header = () => {
  return (
    <div className={container}>
      <div className={contentContainer}>
        <h1 className={header}>lo-fi nerdfighter art</h1>
        <PlayButton />
      </div>
    </div>
  );
};

export default Header;
