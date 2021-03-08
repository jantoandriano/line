import React from "react";
import { Flex, Heading, Box, Button, Spacer } from "@chakra-ui/react";

function TitleBar() {
  return (
    <Box bg="white">
      <Flex p="2">
        <Box p="2">
          <Heading size="sm">LINE TODAY</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal">Masuk</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default TitleBar;
