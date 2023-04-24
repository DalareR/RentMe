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
import { motion, spring } from "framer-motion";
import { initial } from "lodash";
import { useState } from "react";

const variants = {
  initial: {},
  inView: {
    transition: {
      when: "afterChildren",
    },
  },
};

const variantsX = {
  initial: {
    x: -100,
  },
  inView: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const variantsY = {
  initial: {
    y: -100,
  },
  inView: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

function Service() {
  const [test, setTest] = useState(0);
  return (
    <Flex
      direction="column"
      align="center"
      p={{ lg: "50", md: "30", base: "10" }}
    >
      <Heading color="brand.500" mb="5" textDecor="underline">
        Our Services
      </Heading>
      <Box>
        {services.map((service, index) => (
          <Flex
            as={motion.div}
            variants={variants}
            initial="initial"
            whileInView="inView"
            direction={{ base: "column", md: "row" }}
            align="center"
            overflow="hidden"
            key={index}
            className="serviceEven"
            p={"25px"}
          >
            <Stack
              as={motion.div}
              variants={variantsX}
              className="serviceImage"
            >
              <Image
                maxW={{ base: "300px", md: "400px", lg: "600px" }}
                src={service.img}
                flex="1"
              />
            </Stack>
            <Stack
              as={motion.div}
              variants={variantsY}
              mt={{ base: "5" }}
              ml={{ md: "5", lg: "5" }}
            >
              <Heading color={"brand.500"}>{service.title}</Heading>
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
