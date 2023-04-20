import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
} from "@chakra-ui/react";
import cover from "../assets/images/coupleInACar.jpg";
import { useEffect, useState } from "react";

function Hero() {
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    setDocHeight(window.innerHeight - 60);
    window.addEventListener("resize", () =>
      setDocHeight(window.innerHeight - 60)
    );
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent={{ base: "center", md: "start" }}
        alignItems={{ base: "start", md: "center" }}
        w="100vw"
        h={`${docHeight}px`}
        p={{ base: "10px", md: "25px" }}
        bgImage={cover}
        bgPos="center"
        bgSize="cover"
      >
        <Box bg="white" minW="300px" maxW="500px" p="15px" borderRadius="5px">
          <Heading fontSize="2xl" mb="10px">
            Car Rentals
          </Heading>
          <FormControl>
            <Input type="text" placeholder="Location" mb="5px" />
            <HStack mb="10px">
              <Input type="date" placeholder="From" />
              <Input type="date" placeholder="" />
            </HStack>
            <Button colorScheme="brand">Search</Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
