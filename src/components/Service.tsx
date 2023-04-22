import yellowChevy from "../assets/images/yellowchevy.png";
import { Flex, Stack, Heading, Image, Text } from "@chakra-ui/react";

function Service() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      p={{ lg: "100", md: "50", base: "30" }}
      overflow="hidden"
    >
      <Image
        maxW={{ base: "300px", md: "400px", lg: "600px" }}
        src={yellowChevy}
        flex="1"
      />
      <Stack mt={{ base: "5" }} ml={{ md: "5", lg: "5" }}>
        <Heading color="brand.500">Service</Heading>
        <Text flex="1" size="lg">
          We are a car rental company providing rental services with a wide
          range of vehicles. We offer unparalleled customer service, making it
          easy and convenient to get the perfect car for your needs. From luxury
          to economy vehicles, we have something for everyone. Our rates are
          competitive and our vehicles are well-maintained. With locations all
          over the country, Rent.me is the perfect choice for your next car
          rental.
        </Text>
      </Stack>
    </Flex>
  );
}

export default Service;
