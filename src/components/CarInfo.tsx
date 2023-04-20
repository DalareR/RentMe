import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { CarDetail } from "../App";

interface Props {
  carInfo: CarDetail;
}

function CarInfo({ carInfo }: Props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
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
        <VStack>
          <Heading size="sm">{carInfo.price} </Heading>
          <Button variant="solid" colorScheme="brand">
            Book
          </Button>
        </VStack>
      </CardFooter>
    </Card>
  );
}

export default CarInfo;
