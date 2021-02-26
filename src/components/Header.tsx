import React from "react";
import { css } from "linaria";
/* import PlayButton from "./PlayButton"; */

const container = css`
  display: flex;
  position: fixed;
  z-index: 2;
  width: 100%;
  padding: 16px;
  background-color: #7B341E
  justify-content: center;
  align-items: center;
`;

const header = css`
  color: white;
  padding-left: 60px;
  padding-right: 60px;
`;

const Header = () => {
  return (
    <div className={container}>
      <h1 className={header}>lo-fi nerdfighter art</h1>
    </div>
  );
};

export default Header;
