import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  VStack,
} from "@chakra-ui/react";
import { CarDetail } from "../App";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  carInfo: CarDetail;
  variants: any;
  custom: number;
}

function CarInfo({ carInfo, variants, custom }: Props) {
  const navigate = useNavigate();

  const handleClick = (carInfo: CarDetail) => {
    navigate("/checkout", { state: carInfo });
  };

  return (
    <Card
      as={motion.div}
      variants={variants}
      custom={custom}
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
      mb="10px"
    >
      <CardBody>
        <Heading size="lg">{carInfo.car}</Heading>
        <Text fontSize="sm">Color: {carInfo.car_color}</Text>
        <Text fontSize="sm">Model: {carInfo.car_model}</Text>
        <Text fontSize="sm">Year: {carInfo.car_model_year}</Text>
      </CardBody>
      <CardFooter>
        <Flex
          w="100%"
          direction={{ base: "row", md: "column" }}
          justify={{ base: "space-between" }}
          align={{ base: "center" }}
        >
          <Heading size="sm">{carInfo.price} </Heading>
          <Button
            variant="solid"
            colorScheme="brand"
            onClick={() => handleClick(carInfo)}
          >
            Book
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default CarInfo;
