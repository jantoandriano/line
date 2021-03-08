import React, { useState } from "react";
import {
  SimpleGrid,
  Button,
  Box,
  Heading,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const CategoryBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenBar = () => {
    setOpen(!open);
  };

  const tabItems = [
    "top",
    "rekomendasi",
    "showbiz",
    "news",
    "life",
    "regional",
    "hot issues",
    "intermezo",
    "hobbies",
    "sports",
    "games",
    "covid 19",
  ];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" bgColor="white" p="2">
        {!open ? (
          <CategoryTab tabItems={tabItems} />
        ) : (
          <Box>
            <Heading size="sm">Category</Heading>
          </Box>
        )}
        <ButtonGroup onClick={handleOpenBar}>
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </ButtonGroup>
      </Box>

      {open && <AllCategoryBar tabItems={tabItems} />}
    </Box>
  );
};

export default CategoryBar;

const AllCategoryBar = ({ tabItems }) => {
  return (
    <div className={styles.allCategory}>
      <SimpleGrid minChildWidth="100px" spacing={2}>
        {tabItems.map((tab, idx) => (
          <Button key={idx} bg="white" textTransform="capitalize">
            {tab}
          </Button>
        ))}
      </SimpleGrid>
    </div>
  );
};

const CategoryTab = ({ tabItems }) => {
  return (
    <>
      {tabItems.slice(0, 8).map((tab, idx) => (
        <Box
          key={idx}
          _hover={{
            background: "white",
            color: "teal.500",
            cursor: "pointer",
          }}
        >
          <Text>{tab}</Text>
        </Box>
      ))}
    </>
  );
};
