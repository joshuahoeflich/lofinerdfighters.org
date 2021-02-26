import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { css } from "linaria";
import { gif } from "../components/LofiJohn";
// @ts-ignore
import John from "../images/john.gif";

const link = css`
  padding-top: 10px;
  text-align: center;
  font-size: 24px;
`;

const notFound = css`
  padding-top: 10px;
  font-size: 36px;
`;

const notFoundContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <Layout>
      <div className={notFoundContainer}>
        <img src={John} className={gif} alt="John signing his name." />
        <p className={notFound}>not found</p>
        <Link to="/" className={link}>
          return home
        </Link>
      </div>
    </Layout>
  );
};

/* import Seo from "../components/SEO"; */
/* import { Flex } from "@chakra-ui/react"; */
/* import LofiJohn from "../components/LofiJohn"; */
/* import Anglerfish from "../components/Anglerfish"; */
/* import Circles from "../components/Circles"; */
/* import FrenchTheLlama from "../components/FrenchTheLlama"; */
/* import PizzaJohn from "../components/PizzaJohn"; */
/* import Infinity from "../components/Infinity"; */
/* import Header from "../components/Header"; */

/* const HomeBody: React.FC = () => { */
/*   return ( */
/*     <Flex width="100%" height="100%" flexDirection="column" py="64px"> */
/*       <Flex flexWrap="wrap" justifyContent="center"> */
/*         <LofiJohn /> */
/*         <Anglerfish /> */
/*         <FrenchTheLlama /> */
/*         <PizzaJohn /> */
/*         <Circles /> */
/*         <Infinity /> */
/*       </Flex> */
/*     </Flex> */
/*   ); */
/* }; */

/* const HomePage: React.FC = () => { */
/*   return ( */
/*     <> */
/*       <Seo /> */
/*       <Header /> */
/*       <HomeBody /> */
/*     </> */
/*   ); */
/* }; */

export default HomePage;
