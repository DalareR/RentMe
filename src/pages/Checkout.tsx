import { Button, Grid, GridItem, useToast, Text } from "@chakra-ui/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";
import CheckoutCarInfo from "../components/Checkout/CheckoutCarInfo";
import CheckoutDriversInfo from "../components/Checkout/CheckoutDriversInfo";
import CheckoutContact from "../components/Checkout/CheckoutContact";
import CheckoutChargeSummary from "../components/Checkout/CheckoutChargeSummary";
import PageCurtain from "../components/PageCurtain";

const schema = z.object({
  firstName: z.string().nonempty("Name Required!").min(3),
  lastName: z.string().nonempty("Last Name Required!").min(3),
  stateIssued: z.string().nonempty("Enter License Issue State!").min(2),
  email: z
    .string()
    .nonempty("Email Required")
    .email("Not valid Email! Check for missing '@' or '.com'"),
  countryCode: z.string().nonempty("Country Code Required!"),
  phone: z
    .string()
    .nonempty("Phone Number Required!")
    .max(10, "Incorrect phone number"),
});

type CheckoutData = z.infer<typeof schema>;

interface Props {
  pickUpDate: string;
  dropOffDate: string;
}

function Checkout({ pickUpDate, dropOffDate }: Props) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutData>({ resolver: zodResolver(schema) });
  const toast = useToast();
  const { state } = useLocation();

  const onsubmit = (data: CheckoutData) => {
    reset();
    toast({
      title: "Booking Complete 🎉",
      description: `Thank you, ${data.firstName} ${data.lastName} for choosing us. We wish you safe travels.`,
      duration: 5000,
      isClosable: true,
      status: "success",
    });
  };

  return (
    <>
      <Grid
        gridTemplateColumns={{ lg: `2fr 1fr`, base: `auto` }}
        gap={5}
        p="25px"
      >
        <GridItem>
          <form onSubmit={handleSubmit(onsubmit)}>
            <CheckoutCarInfo
              carInfo={state}
              pickUpDate={pickUpDate}
              dropOffDate={dropOffDate}
            />
            <CheckoutDriversInfo register={register} errors={errors} />
            <CheckoutContact register={register} errors={errors} />
            <Button type="submit" w="100%" colorScheme="brand">
              Complete Booking
            </Button>
          </form>
        </GridItem>
        <GridItem>
          <CheckoutChargeSummary price={state.price} />
        </GridItem>
      </Grid>
      <PageCurtain>Checkout</PageCurtain>
    </>
  );
}

export default Checkout;
