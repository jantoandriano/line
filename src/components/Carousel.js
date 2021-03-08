import React from "react";
import { AspectRatio, Box, Image } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <Box>
      <AspectRatio maxW="100%" maxH="300px" ratio={1}>
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
          boxSize="100px"
        />
      </AspectRatio>
    </Box>
  );
};

export default Carousel;
