import yellowChevy from "../assets/images/yellowchevy.png";
import { Flex, Stack, Heading, Image, Text } from "@chakra-ui/react";

function Service() {
  return (
    <Flex
      direction="column"
      align="center"
      p={{ lg: "50", md: "30", base: "10" }}
    >
      <Heading color="brand.500" mb="5" textDecor={"underline"}>
        Service
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        overflow="hidden"
      >
        <Image
          maxW={{ base: "300px", md: "400px", lg: "600px" }}
          src={yellowChevy}
          flex="1"
        />
        <Stack mt={{ base: "5" }} ml={{ md: "5", lg: "5" }}>
          <Text flex="1" size="lg">
            We are a car rental company providing rental services with a wide
            range of vehicles. We offer unparalleled customer service, making it
            easy and convenient to get the perfect car for your needs. From
            luxury to economy vehicles, we have something for everyone. Our
            rates are competitive and our vehicles are well-maintained. With
            locations all over the country, Rent.me is the perfect choice for
            your next car rental.
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Service;
