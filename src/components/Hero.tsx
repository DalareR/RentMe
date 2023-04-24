import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  VStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import cover from "../assets/images/coupleInACar.jpg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  location: z.string().nonempty("Location Required"),
  pickUpDate: z.string().nonempty("Pick-up Date Required"),
  dropOffDate: z.string().nonempty("Drop-off Date Required"),
});

export type RentalData = z.infer<typeof schema>;

interface Props {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setPickUpDate: React.Dispatch<React.SetStateAction<string>>;
  setDropOffDate: React.Dispatch<React.SetStateAction<string>>;
}

function Hero({ setLocation, setDropOffDate, setPickUpDate }: Props) {
  const [docHeight, setDocHeight] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RentalData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  useEffect(() => {
    setDocHeight(window.innerHeight - 60);
    window.addEventListener("resize", () =>
      setDocHeight(window.innerHeight - 60)
    );
  }, []);

  const onSubmit = (data: RentalData) => {
    setLocation(data.location);
    setPickUpDate(data.pickUpDate);
    setDropOffDate(data.dropOffDate);
    navigate("/carslist", { state: data });
  };

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
        bgRepeat="no-repeat"
        overflow="hidden"
      >
        <Box
          as={motion.div}
          initial={{ x: -100 }}
          animate={{ x: 0, transition: { duration: 1, type: "spring" } }}
          bg="white"
          minW="300px"
          maxW="500px"
          p="15px"
          borderRadius="5px"
        >
          <Heading fontSize="2xl" mb="10px">
            Car Rentals
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input
                {...register("location")}
                id="location"
                type="text"
                placeholder="Location"
                mb="10px"
              />
              {errors.location && (
                <Text color="crimson">{errors.location.message}</Text>
              )}
              <Stack direction={{ base: "column", md: "row" }} mb="10px">
                <VStack>
                  <FormLabel
                    htmlFor="pickUpDate"
                    fontSize="sm"
                    fontWeight="bold"
                    m="0"
                    p="0"
                  >
                    Pick Up
                  </FormLabel>
                  <Input
                    type="date"
                    id="pickUpDate"
                    {...register("pickUpDate")}
                  />
                  {errors.pickUpDate && (
                    <Text color="crimson">{errors.pickUpDate.message}</Text>
                  )}
                </VStack>
                <VStack>
                  <FormLabel
                    htmlFor="dropOffDate"
                    fontSize="sm"
                    fontWeight="bold"
                    m="0"
                    p="0"
                  >
                    Drop Off
                  </FormLabel>
                  <Input
                    type="date"
                    id="dropOffDate"
                    {...register("dropOffDate")}
                  />
                  {errors.dropOffDate && (
                    <Text color="crimson">{errors.dropOffDate.message}</Text>
                  )}
                </VStack>
              </Stack>
              <Button colorScheme="brand" type="submit">
                Search
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
