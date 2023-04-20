import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Text,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { CarDetail } from "../App";
import { FiSearch } from "react-icons/fi";
import CarInfo from "./CarInfo";
import { useState } from "react";
import _ from "lodash";
import Pagination from "./Pagination";
import paginate from "../paginate";

interface Props {
  carsList: CarDetail[];
}

function CarsList({ carsList }: Props): any {
  const maxItems = 8;
  const [searchedCarName, setSearchedCarName] = useState("");
  const [activePage, setActivePage] = useState(0);

  const searchFilteredCarsList = searchedCarName
    ? carsList.filter(
        (car) =>
          car.car
            .toLocaleLowerCase()
            .startsWith(searchedCarName.toLocaleLowerCase()) ||
          car.car_model
            .toLocaleLowerCase()
            .startsWith(searchedCarName.toLocaleLowerCase())
      )
    : carsList;

  const paginatedItems = paginate({
    items: searchFilteredCarsList,
    maxItemsInPage: maxItems,
    activePage: activePage,
  });

  return (
    <Container>
      <Stack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiSearch} />}
          />
          <Input
            value={searchedCarName}
            onChange={(e) => {
              setActivePage(0);
              setSearchedCarName(e.target.value);
            }}
            type="text"
            placeholder="Search by Car Name or Model"
          />
        </InputGroup>
        {searchFilteredCarsList.length === 0 ? (
          <Text>No Results</Text>
        ) : (
          paginatedItems.map((car) => <CarInfo carInfo={car} key={car.id} />)
        )}
        {searchFilteredCarsList.length <= 8 ? null : (
          <Pagination
            items={searchFilteredCarsList}
            maxItemsInPage={maxItems}
            activePage={activePage}
            onActivePageClick={(page) => setActivePage(page)}
          />
        )}
      </Stack>
    </Container>
  );
}

export default CarsList;
