import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ data }) => {
  return (
    <Box cursor="pointer">
      <Image
        src={data.publisherImageCdnHash}
        boxSize="100px"
        borderRadius="3"
      />
      <Box paddingLeft="3">
        <Text textTransform="capitalize">{data.title}</Text>
        <Text color="lightgrey">{data.publisher}</Text>
      </Box>
    </Box>
  );
};

export default Card;
