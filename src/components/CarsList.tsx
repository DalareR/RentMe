import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { CarDetail } from "../App";
import { FiSearch } from "react-icons/fi";

interface Props {
  carsList: CarDetail[];
}

function CarsList({ carsList }: Props): any {
  return (
    <Container>
      <Stack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiSearch} />}
          />
          <Input type="text" placeholder="Search by Car Name" />
        </InputGroup>
        {carsList.map((car) => {
          return (
            <Card
              key={car.id}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <CardBody>
                <Heading size="lg">{car.car}</Heading>
                <Heading size="sm">Color</Heading>
                <Heading size="sm">{car.car_model}</Heading>
                <Heading size="sm"> {car.car_model_year}</Heading>
              </CardBody>
              <CardFooter>
                <VStack>
                  <Heading size="sm">{car.price} </Heading>
                  <Button variant="solid" colorScheme="brand">
                    Book
                  </Button>
                </VStack>
              </CardFooter>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}

export default CarsList;
