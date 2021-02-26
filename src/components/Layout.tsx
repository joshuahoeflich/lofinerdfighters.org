import React from "react";
import Header from "../components/Header";
import { css } from "linaria";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const pageContainer = css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const contentContainer = css`
  display: flex;
  width: 90%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet title="lo-fi nerdfighter art">
        <meta name="description" content="Lofi Nerdfighter Art." />
      </Helmet>
      <Header />
      <div className={pageContainer}>
        <div className={contentContainer}>
          <Fade direction="left">{children}</Fade>
        </div>
      </div>
    </>
  );
};

export default Layout;
