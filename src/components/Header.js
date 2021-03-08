import React from "react";
import { Box } from "@chakra-ui/react";
import CategoryBar from "./CategoryBar";
import TitleBar from "./TitleBar";
import CategoryBarSecond from "./CategoryBarSecond";

const Header = ({categoryList}) => {
  return (
    <Box overflow="hidden">
      <TitleBar />
      <CategoryBar categoryList={categoryList} />
      <CategoryBarSecond categoryList={categoryList} />
    </Box>
  );
};


export default Header;
