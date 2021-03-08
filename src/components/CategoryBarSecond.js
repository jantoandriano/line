import React from "react";
import Link from "next/link";

import { Box, Button, Center, Flex } from "@chakra-ui/react";

const CategoryBarSecond = ({ categoryList }) => {
  return (
    <Box my="5">
      <Center>
        <Flex>
          {categoryList.slice(0, 3).map((cate) => (
            <Link key={cate.id} href={`/tab/${cate.name}`}>
              <Button bg="white" px="10" py="6" mx="2" fontWeight="light">
                {cate.name}
              </Button>
            </Link>
          ))}
        </Flex>
      </Center>
    </Box>
  );
};

export default CategoryBarSecond;
