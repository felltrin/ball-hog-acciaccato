"use client";

import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const Review = () => {
  return (
    <Box minH={"200px"} bg={useColorModeValue("pink.200", "pink.200")}>
      <div>Not ready for a quote?</div>
    </Box>
  );
};

export default Review;
