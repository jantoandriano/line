import React, { useState } from "react";
import {
  SimpleGrid,
  Button,
  Box,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const CategoryBar = ({ categoryList }) => {
  const [open, setOpen] = useState(false);

  const handleOpenBar = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" bgColor="white" p="2">
        {!open ? (
          <CategoryTab categoryList={categoryList} />
        ) : (
          <Box>
            <Heading size="sm">Category</Heading>
          </Box>
        )}
        <ButtonGroup onClick={handleOpenBar}>
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </ButtonGroup>
      </Box>

      {open && <AllCategoryBar categoryList={categoryList} />}
    </Box>
  );
};

export default CategoryBar;

const AllCategoryBar = ({ categoryList }) => {
  return (
    <Box mt="2">
      <SimpleGrid minChildWidth="100px" spacing={2}>
        {categoryList.map((tab, idx) => (
          <Link href={`/tab/${tab.name}`}>
            <Button key={tab.id} bg="white">
              {tab.name}
            </Button>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const CategoryTab = ({ categoryList }) => {
  return (
    <>
      {categoryList.slice(0, 8).map((tab, idx) => (
        <Box
          key={tab.id}
          _hover={{
            background: "white",
            color: "teal.500",
            cursor: "pointer",
          }}
        >
          <Link href={`/tab/${tab.name}`}>
            <Button key={tab.id} bg="white">
              {tab.name}
            </Button>
          </Link>
        </Box>
      ))}
    </>
  );
};
