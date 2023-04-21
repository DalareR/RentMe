import {
  Text,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";
import { CarDetail } from "../../App";

interface Props {
  carInfo: CarDetail;
  pickUpDate: string;
  dropOffDate: string;
}

function CheckoutCarInfo({ carInfo, pickUpDate, dropOffDate }: Props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mb="20px"
    >
      <CardBody>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify={{ base: "space-between" }}
          mb="15px"
        >
          <Stack mb={{ base: "10px" }}>
            <Heading size="lg">{carInfo.car}</Heading>
            <Heading size="sm">{carInfo.car_color}</Heading>
            <Heading size="sm">{carInfo.car_model}</Heading>
            <Heading size="sm">{carInfo.car_model_year}</Heading>
          </Stack>
          <Stack border="1px solid gray" p="10px" borderRadius="10px">
            <Text>
              <Icon as={BsCheckLg} color="green" /> Free Cancellation
            </Text>
            <Text>
              <Icon as={BsCheckLg} color="green" /> Pay at Pick-up
            </Text>
            <Text>
              <Icon as={BsCheckLg} color="green" /> Unlimited Mileage
            </Text>
            <Text>
              <Icon as={BsCheckLg} color="green" /> Online Check-in
            </Text>
            <Text>
              <Icon as={BsCheckLg} color="green" /> Car on Airport
            </Text>
          </Stack>
        </Flex>
        <Divider />
        <HStack justify="space-around">
          <Stack>
            <Text color="gray">PICK-UP</Text>
            <Heading size="md" fontWeight="bold">
              {pickUpDate}
            </Heading>
          </Stack>
          <Stack>
            <Text color="gray">DROP-OFF</Text>
            <Heading size="md" fontWeight="bold">
              {dropOffDate}
            </Heading>
          </Stack>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default CheckoutCarInfo;
