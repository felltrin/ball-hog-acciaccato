import { Button, Container, Input, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container maxW={"1200px"}>
      <Text>{'Less "gotcha."'}</Text>
      <Text>{'More "we got you"'}</Text>
      <Text>
        {
          "Save up to $1,232* when you switch and bundle home and auto. Or call us"
        }
      </Text>
      <Text>{"844-557-1662"}</Text>
      <Button>Auto</Button>
      <Button>Home</Button>
      <Button>Renters</Button>
      <Button>Mobile home</Button>
      <Button>Life</Button>
      <Button>Business</Button>
      <Input placeholder="ZIP code" />
      <Button>Get my quote</Button>
      <Text>{"Find a saved quote"}</Text>
      <img src="/farmers-hero-editorial-v1-500width.webp" alt="Explode head" />
    </Container>
  );
};

export default Hero;
