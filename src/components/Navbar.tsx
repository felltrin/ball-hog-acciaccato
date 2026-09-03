"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { IoMdPerson } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

// pink color RGB - (245, 200, 231)

const Navbar = () => {
  return (
    <Container maxW={"1200px"}>
      <Box
        px={4}
        my={2}
        borderRadius={50}
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
            <Box
              px={4}
              my={4}
              borderLeftRadius={50}
              bg={useColorModeValue("pink.200", "pink.200")}
            >
              <img src="/logo_dos.svg" alt="FM logo" width={80} height={80} />
            </Box>

            <Text fontSize={"16px"}>Insurance</Text>
            <Text fontSize={"16px"}>Get a quote</Text>
            <Text fontSize={"16px"}>Find an Agent</Text>
            <Text fontSize={"16px"}>Claims</Text>
            <Text fontSize={"16px"}>Resources</Text>
            <Text fontSize={"16px"}>Payments</Text>

            {/* <img src="/python.png" alt="Python logo" width={50} height={40} /> */}
            {/* <img src="/explode.png" alt="Explode head" width={45} height={45} /> */}
          </Flex>
          {/* Right side */}
          <Flex gap={3} alignItems={"center"}>
            <FaMagnifyingGlass />
            <IoMdPerson />
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
            >
              Log in
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};
export default Navbar;
