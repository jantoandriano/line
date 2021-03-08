import React from "react";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


const Foryou = () => {
  return (
    <Box>
      <Box m='4' borderRadius="4" color="white" bgGradient="linear-gradient(103deg,#c74a82,#f68a94)" >
      <Heading textTransform="uppercase" size="md" p="10">artikel pilihan untukmu</Heading>
      </Box>
      <SimpleGrid columns={2} spacing={10} p="4">
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Box>
  );
};

export default Foryou;
