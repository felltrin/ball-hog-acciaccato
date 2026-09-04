import { Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default async function Page() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Hero />
    </Stack>
  );
}
