import { Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Review from "../components/Review";

export default async function Page() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Hero />
      <Review />
    </Stack>
  );
}
