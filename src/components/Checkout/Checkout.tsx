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
import CarInfo from "../CarInfo";
import { BsCheckLg } from "react-icons/bs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";
import CheckoutCarInfo from "./CheckoutCarInfo";
import FormInput from "../FormInput";
import CheckoutDriversInfo from "./CheckoutDriversInfo";
import CheckoutContact from "./CheckoutContact";

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
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutData>({ resolver: zodResolver(schema) });
  const { state } = useLocation();

  return (
    <Grid
      gridTemplateColumns={{ lg: `2fr 1fr`, base: `auto` }}
      gap={5}
      p="25px"
    >
      <GridItem>
        <form onSubmit={handleSubmit((data) => reset)}>
          <CheckoutCarInfo carInfo={state} />
          <CheckoutDriversInfo register={register} errors={errors} />
          <CheckoutContact register={register} errors={errors} />
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
              <Text>{state.price}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Tax</Text>
              <Text>0</Text>
            </HStack>
            <Divider />
            <HStack justify="space-between">
              <Text size="md" fontWeight="bold">
                Total
              </Text>
              <Text size="md" fontWeight="bold">
                {state.price}
              </Text>
            </HStack>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default Checkout;
