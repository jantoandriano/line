import React from "react";
import { Box } from "@chakra-ui/react";
import CategoryBar from "./CategoryBar";
import TitleBar from "./TitleBar";
import CategoryBarSecond from "./CategoryBarSecond";

const Header = () => {
  return (
    <Box overflow="hidden">
      <TitleBar />
      <CategoryBar />
      <CategoryBarSecond />
    </Box>
  );
};

export default Header;
