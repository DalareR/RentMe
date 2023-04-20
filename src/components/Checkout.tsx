import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import CarInfo from "./CarInfo";
import { BsCheckLg } from "react-icons/bs";

function Checkout() {
  return (
    <Grid
      gridTemplateColumns={{ lg: `2fr 1fr`, base: `auto` }}
      gap={5}
      p="25px"
    >
      <GridItem>
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
                <Heading size="lg">Nissan Altima</Heading>
                <Heading size="sm">Red</Heading>
                <Heading size="sm">2018 Sedan</Heading>
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
                  Thu, Apr 27, 2023
                </Heading>
              </Stack>
              <Stack>
                <Text color="gray">DROP-OFF</Text>
                <Heading size="md" fontWeight="bold">
                  Thu, May 4, 2023
                </Heading>
              </Stack>
            </HStack>
          </CardBody>
        </Card>
        <Card variant="outline" mb="20px">
          <CardHeader>
            <Heading fontSize="lg">Driver Information</Heading>
            <Text>Must match Driver's License</Text>
          </CardHeader>
          <CardBody>
            <FormControl>
              <Input type="text" placeholder="First name" mb="10px" />
              <Input type="text" placeholder="Last name" mb="10px" />
              <Input type="text" placeholder="State Issued" mb="10px" />
            </FormControl>
          </CardBody>
        </Card>
        <Card variant="outline">
          <CardHeader>
            <Heading>Contact</Heading>
          </CardHeader>
          <CardBody>
            <FormControl>
              <Input type="text" placeholder="Email address" mb="10px" />
              <Flex>
                <Input
                  flex="1"
                  type="number"
                  placeholder="Country Code"
                  mr="5px"
                />
                <Input flex="3" type="number" placeholder="Phone Number" />
              </Flex>
            </FormControl>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card overflow="hidden" variant="outline">
          <CardHeader>
            <Heading size="md" fontWeight="bold">
              Summary of Charges
            </Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <HStack justify="space-between" mb="10px">
              <Text>Rental</Text>
              <Text>$200</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Tax</Text>
              <Text>$12</Text>
            </HStack>
            <Divider />
            <HStack justify="space-between">
              <Text size="md" fontWeight="bold">
                Total
              </Text>
              <Text size="md" fontWeight="bold">
                $212
              </Text>
            </HStack>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Checkout;
