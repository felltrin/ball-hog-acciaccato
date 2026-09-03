"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

const Navbar = () => {
  return (
    <Container maxW={"900px"}>
      <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={useColorModeValue("gray.200", "gray.700")}
        suppressHydrationWarning
      >
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/* Left side */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img src="/react.png" alt="React logo" width={50} height={50} />
            <Text fontSize={"40px"}>+</Text>
            <img src="/python.png" alt="Python logo" width={50} height={40} />
            <Text fontSize={"40px"}>=</Text>

            <img src="/explode.png" alt="Explode head" width={45} height={45} />
          </Flex>
          {/* Right side */}
          <Flex gap={3} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
            >
              BFFship 🔥
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};
export default Navbar;
