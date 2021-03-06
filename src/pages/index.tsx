import React from "react";
import Layout from "../components/Layout";
import Anglerfish from "../components/Anglerfish";
import Circles from "../components/Circles";
import FrenchTheLlama from "../components/FrenchTheLlama";
import Infinity from "../components/Infinity";
import PizzaJohn from "../components/PizzaJohn";
import LofiJohn from "../components/LofiJohn";

const HomePage = () => {
  return (
    <Layout>
      <LofiJohn />
      <Anglerfish />
      <FrenchTheLlama />
      <Circles />
      <Infinity />
      <PizzaJohn />
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
