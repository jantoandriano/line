import React from 'react'
import { Box, Button, Center, Flex } from "@chakra-ui/react";

const CategoryBarSecond =() => {
    return (
        <Box my="5">
        <Center>
          <Flex>
            <Button bg="white" px="10" py="6" fontWeight="light">
              HOT ISSUE
            </Button>
            <Button bg="white" px="10" py="6" fontWeight="light">
              Watch Now
            </Button>
            <Button bg="white" px="10" py="6" fontWeight="light">
              Update
            </Button>
          </Flex>
        </Center>
      </Box>
    )
}

export default CategoryBarSecond
