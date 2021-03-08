import React from "react";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


const Foryou = ({data, title}) => {

  return (
    <Box>
      <Box m='4' borderRadius="4" color="white" bgGradient="linear-gradient(103deg,#1e3c72,#2a5298)" >
      <Heading textTransform="uppercase" size="md" p="10">{title}</Heading>
      </Box>
      <SimpleGrid columns={2} spacing={10} p="4">
        {data.map(v => (
          <Card key={v.id} data={v} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Foryou;
