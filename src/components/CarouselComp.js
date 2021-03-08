import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComp = ({ data }) => {
  return (
    <Carousel autoPlay>
      {data[0].sections[0].articles.map((v) => (
        <Box>
          <Image
            src={`https://obs.line-scdn.net/${v.thumbnail.hash}`}
            borderRadius="3"
            height="300px"
            width="100%"
            objectFit="fill"
          />
          <Box
            borderRadius="4"
            boxShadow="md"
            bgColor="white"
            mx="6"
            pos="relative"
            bottom="10"
            left="0"
            zIndex="99"
            height="90px"
          >
              <Heading size="md" py="4">
                {v.title}
              </Heading>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselComp;

{
  /* <Box>
      <Box bg="lightblue" height="300px">
        1
      </Box>
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
    </Box> */
}
