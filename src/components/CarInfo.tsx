import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { CarDetail } from "../App";
import { Link } from "react-router-dom";

interface Props {
  carInfo: CarDetail;
}

function CarInfo({ carInfo }: Props) {
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody>
        <Heading size="lg">{carInfo.car}</Heading>
        <Heading size="sm">{carInfo.car_color}</Heading>
        <Heading size="sm">{carInfo.car_model}</Heading>
        <Heading size="sm"> {carInfo.car_model_year}</Heading>
      </CardBody>
      <CardFooter>
        <Flex
          w="100%"
          direction={{ base: "row", md: "column" }}
          justify={{ base: "space-between" }}
          align={{ base: "center" }}
        >
          <Heading size="sm">{carInfo.price} </Heading>
          <Link to="/checkout">
            <Button variant="solid" colorScheme="brand">
              Book
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default CarInfo;
