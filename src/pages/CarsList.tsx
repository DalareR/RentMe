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
  Grid,
  GridItem,
  Select,
  Wrap,
} from "@chakra-ui/react";
import { CarDetail } from "../App";
import { FiSearch } from "react-icons/fi";
import CarInfo from "../components/CarInfo";
import { useEffect, useState } from "react";
import _ from "lodash";
import Pagination from "../components/Pagination";
import paginate from "../paginate";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageCurtain from "../components/PageCurtain";

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      delay: 0.05 * i,
    },
  }),
};

interface Props {
  carsList: CarDetail[];
}

function CarsList({ carsList }: Props): any {
  const maxItems = 8;
  const [searchedCarName, setSearchedCarName] = useState("");
  const [activePage, setActivePage] = useState(0);
  const [selectedCarYear, setSelectedCarYear] = useState(0);

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

  const carModelYear = _.uniq(
    _.orderBy(
      searchFilteredCarsList.map((car) => car.car_model_year),
      (year) => year,
      "desc"
    )
  );

  const sortedModelYear = selectedCarYear
    ? searchFilteredCarsList.filter(
        (car) => car.car_model_year === selectedCarYear
      )
    : searchFilteredCarsList;

  const paginatedItems = paginate({
    items: sortedModelYear,
    maxItemsInPage: maxItems,
    activePage: activePage,
  });

  return (
    <>
      <Stack p={{ base: "10px", md: "25px" }}>
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
        <Grid gridTemplateColumns={{ base: "auto", md: "1fr 4fr" }} gap={5}>
          <GridItem>
            <Select
              placeholder="Select car make year"
              onChange={(e) => {
                setSelectedCarYear(+e.target.value);
                setActivePage(0);
              }}
            >
              {carModelYear.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </GridItem>
          <GridItem>
            <Box
              as={motion.div}
              variants={variants}
              initial="initial"
              animate="animate"
            >
              {paginatedItems.length === 0 ? (
                <Text>No Results</Text>
              ) : (
                paginatedItems.map((car, i) => (
                  <CarInfo
                    carInfo={car}
                    key={car.id}
                    variants={variants}
                    custom={i}
                  />
                ))
              )}
              {sortedModelYear.length <= 8 ? null : (
                <Pagination
                  items={sortedModelYear}
                  maxItemsInPage={maxItems}
                  activePage={activePage}
                  onActivePageClick={(page) => setActivePage(page)}
                />
              )}
            </Box>
          </GridItem>
        </Grid>
      </Stack>
      <PageCurtain>Car List</PageCurtain>
    </>
  );
}

export default CarsList;
