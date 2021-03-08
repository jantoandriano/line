import React from "react";
import Link from "next/link";
import { Flex, Heading, Box, Button, Spacer } from "@chakra-ui/react";

function TitleBar() {
  return (
    <Box bg="white">
      <Flex p="2">
        <Box p="2" cursor="pointer">
          <Link href="/tab/TOP">
            <Heading size="sm">LINE TODAY</Heading>
          </Link>
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
