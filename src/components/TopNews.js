import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const TopNews = () => {
  return (
    <Box marginTop="6">
      <TopNewsItem />
      <TopNewsItem />
      <TopNewsItem />
    </Box>
  );
};

export default TopNews;

const TopNewsItem = () => {
  return (
    <Box p="3">
      <Flex>
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
          boxSize="100px"
          borderRadius="3"
        />
        <Box paddingLeft="3">
          <Text textTransform="capitalize">
            akkafkmalkmeflaflalf laneniwenfinawfenaknw n ifhofoah foa ih
            iafohoawheiofaiw hoa
          </Text>
          <Text color="lightgrey">Kumparan</Text>
        </Box>
      </Flex>
    </Box>
  );
};
