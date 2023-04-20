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
} from "@chakra-ui/react";
import cover from "../assets/images/coupleInACar.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  location: z.string().nonempty("Location Required"),
  pickup: z.string().nonempty("Pick-up Date Required"),
  dropoff: z.string().nonempty("Drop-off Date Required"),
});

type RentalData = z.infer<typeof schema>;

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
    reset,
    watch,
  } = useForm<RentalData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    setDocHeight(window.innerHeight - 60);
    window.addEventListener("resize", () =>
      setDocHeight(window.innerHeight - 60)
    );
  }, []);

  const onSubmit = (data: RentalData) => {
    setLocation(data.location);
    setPickUpDate(data.pickup);
    setDropOffDate(data.dropoff);
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
      >
        <Box bg="white" minW="300px" maxW="500px" p="15px" borderRadius="5px">
          <Heading fontSize="2xl" mb="10px">
            Car Rentals
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Input
                type="text"
                placeholder="Location"
                mb="10px"
                {...register("location")}
              />
              {errors.location && (
                <Text color="crimson">{errors.location.message}</Text>
              )}
              <HStack mb="10px">
                <VStack>
                  <FormLabel
                    htmlFor="pickup"
                    fontSize="sm"
                    fontWeight="bold"
                    m="0"
                    p="0"
                  >
                    Pick Up
                  </FormLabel>
                  <Input type="date" id="pickup" {...register("pickup")} />
                  {errors.pickup && (
                    <Text color="crimson">{errors.pickup.message}</Text>
                  )}
                </VStack>
                <VStack>
                  <FormLabel
                    htmlFor="dropoff"
                    fontSize="sm"
                    fontWeight="bold"
                    m="0"
                    p="0"
                  >
                    Drop Off
                  </FormLabel>
                  <Input type="date" id="dropoff" {...register("dropoff")} />
                  {errors.dropoff && (
                    <Text color="crimson">{errors.dropoff.message}</Text>
                  )}
                </VStack>
              </HStack>
              {/* <Link to="/carslist"> */}
              <Button colorScheme="brand" type="submit">
                Search
              </Button>
              {/* </Link> */}
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
