import yellowChevy from "../assets/images/yellowchevy.png";
import carsVariety from "../assets/images/carsVariety.png";
import {
  Flex,
  Stack,
  Heading,
  Image,
  Text,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import { services } from "../data/services";

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
      <Box>
        {services.map((service, index) => (
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            overflow="hidden"
            key={index}
            className="serviceEven"
          >
            <Stack className="serviceImage">
              <Image
                maxW={{ base: "300px", md: "400px", lg: "600px" }}
                src={service.img}
                flex="1"
              />
            </Stack>
            <Stack mt={{ base: "5" }} ml={{ md: "5", lg: "5" }}>
              <Heading>{service.title}</Heading>
              <Text flex="1" size="lg">
                {service.desc}
              </Text>
            </Stack>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}

export default Service;
