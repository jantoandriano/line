import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

const CarouselComp = ({ data }) => {
  return (
    <Box>
      <Box bg="lightblue" width="100%" height="300px" />
      <Box
        borderRadius="4"
        boxShadow="md"
        bgColor="white"
        mx="6"
        pos="relative"
        bottom="10"
        left="0"
        zIndex="99"
        height="80px"
      >
        <Heading size="md" pt="2" textAlign="center">
          {data[0].sections[0].articles[0].title}
        </Heading>
      </Box>
    </Box>
  );
};

export default CarouselComp;
