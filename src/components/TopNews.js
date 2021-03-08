import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const TopNews = ({ data }) => {
  return (
    <Box marginTop="6">
      {data[0].sections[0].articles.slice(0, 3).map((v) => (
        <TopNewsItem key={v.id} data={v} />
      ))}
    </Box>
  );
};

export default TopNews;

const TopNewsItem = ({data}) => {
  return (
    <Box p="3">
      <a href={data.url.url}>
      <Flex>
        <Image
          src={data.publisherImageCdnHash}
          boxSize="100px"
          borderRadius="3"
        />
        <Box paddingLeft="3">
          <Text textTransform="capitalize">
            {data.title}
          </Text>
          <Text color="lightgrey">{data.publisher}</Text>
        </Box>
      </Flex>
      </a>
    </Box>
  );
};
