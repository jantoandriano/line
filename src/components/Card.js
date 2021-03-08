import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ data }) => {
  return (
    <Box cursor="pointer">
      <Image
        src={`https://obs.line-scdn.net/${data.thumbnail.hash}`}
        borderRadius="3"
        height="200px"
        width="100%"
        objectFit="fill"
      />
      <Box paddingLeft="3">
        <Text textTransform="capitalize">{data.title}</Text>
        <Text color="lightgrey">{data.publisher}</Text>
      </Box>
    </Box>
  );
};

export default Card;
