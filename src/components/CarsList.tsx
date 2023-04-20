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
import CarInfo from "./CarInfo";

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
        {carsList.map((car) => (
          <CarInfo carInfo={car} key={car.id} />
        ))}
      </Stack>
    </Container>
  );
}

export default CarsList;
