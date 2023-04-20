import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { CarDetail } from "../App";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Props {
  carInfo: CarDetail;
}

function CarInfo({ carInfo }: Props) {
  const navigate = useNavigate();

  const handleClick = (carInfo: CarDetail) => {
    navigate("/checkout", { state: carInfo });
  };

  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
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
