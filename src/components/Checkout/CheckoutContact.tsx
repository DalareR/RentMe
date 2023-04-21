import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  FormControl,
  Flex,
} from "@chakra-ui/react";
import FormInput from "../FormInput";

interface Props {
  register: any;
  errors: any;
}

function CheckoutContact({ register, errors }: Props) {
  return (
    <Card variant="outline" mb="10px">
      <CardHeader>
        <Heading>Contact</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormInput
            id="email"
            placeholder="Email Address*"
            register={{ ...register("email") }}
            type="email"
            errors={errors.email}
          />
          <Flex>
            <FormInput
              id="countryCode"
              placeholder="Country Code*"
              register={{ ...register("countryCode") }}
              type="number"
              errors={errors.countryCode}
              mr={"5px"}
            />
            <FormInput
              id="phone"
              placeholder="Phone Number*"
              register={{ ...register("phone") }}
              type="number"
              errors={errors.phone}
            />
          </Flex>
        </FormControl>
      </CardBody>
    </Card>
  );
}

export default CheckoutContact;
