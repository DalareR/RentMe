import {
  Card,
  Text,
  CardHeader,
  Heading,
  CardBody,
  FormControl,
} from "@chakra-ui/react";
import FormInput from "../FormInput";

interface Props {
  register: any;
  errors: any;
}

function CheckoutDriversInfo({ register, errors }: Props) {
  return (
    <Card variant="outline" mb="20px">
      <CardHeader>
        <Heading fontSize="lg">Driver Information</Heading>
        <Text>Must match Driver's License</Text>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormInput
            id="firstName"
            placeholder="First name*"
            register={{ ...register("firstName") }}
            type="text"
            errors={errors.firstName}
          />
          <FormInput
            id="lastName"
            placeholder="Last name*"
            register={{ ...register("lastName") }}
            type="text"
            errors={errors.lastName}
          />
          <FormInput
            id="stateIssued"
            placeholder="State Issued*"
            register={{ ...register("stateIssued") }}
            type="text"
            errors={errors.stateIssued}
          />
        </FormControl>
      </CardBody>
    </Card>
  );
}

export default CheckoutDriversInfo;
