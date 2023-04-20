import {
  Button,
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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().nonempty("Name Required!").min(3),
  lastName: z.string().nonempty("Last Name Required!").min(3),
  stateIssued: z.string().nonempty("Enter License Issue State!").min(2),
  email: z
    .string()
    .nonempty("Email Required")
    .email("Not valid Email! Check for missing '@' or '.com'"),
  countryCode: z.string().nonempty("Country Code Required!"),
  phone: z.string().nonempty("Phone Number Required!"),
});

type CheckoutData = z.infer<typeof schema>;

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutData>({ resolver: zodResolver(schema) });
  console.log(errors);

  return (
    <Grid
      gridTemplateColumns={{ lg: `2fr 1fr`, base: `auto` }}
      gap={5}
      p="25px"
    >
      <GridItem>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
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
                <Input
                  {...register("firstName")}
                  id="firstName"
                  type="text"
                  placeholder="First name*"
                  mb="10px"
                />
                {errors.firstName && (
                  <Text color="crimson">{errors.firstName.message}</Text>
                )}
                <Input
                  id="lastName"
                  {...register("lastName")}
                  type="text"
                  placeholder="Last name*"
                  mb="10px"
                />
                {errors.lastName && (
                  <Text color="crimson">{errors.lastName.message}</Text>
                )}
                <Input
                  id="stateIssued"
                  {...register("stateIssued")}
                  type="text"
                  placeholder="State Issued*"
                  mb="10px"
                />
                {errors.stateIssued && (
                  <Text color="crimson">{errors.stateIssued.message}</Text>
                )}
              </FormControl>
            </CardBody>
          </Card>
          <Card variant="outline" mb="10px">
            <CardHeader>
              <Heading>Contact</Heading>
            </CardHeader>
            <CardBody>
              <FormControl>
                <Input
                  {...register("email")}
                  id="email"
                  type="text"
                  placeholder="Email address*"
                  mb="10px"
                />
                {errors.email && (
                  <Text color="crimson">{errors.email.message}</Text>
                )}
                <Flex>
                  <Input
                    {...register("countryCode")}
                    id="countryCode"
                    flex="1"
                    type="number"
                    placeholder="Country Code*"
                    mr="5px"
                  />
                  {errors.countryCode && (
                    <Text color="crimson">{errors.countryCode.message}</Text>
                  )}
                  <Input
                    {...register("phone")}
                    id="phone"
                    flex="3"
                    type="number"
                    placeholder="Phone Number*"
                  />
                  {errors.phone && (
                    <Text color="crimson">{errors.phone.message}</Text>
                  )}
                </Flex>
              </FormControl>
            </CardBody>
          </Card>
          <Button type="submit" w="100%" colorScheme="brand">
            Complete Booking
          </Button>
        </form>
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
