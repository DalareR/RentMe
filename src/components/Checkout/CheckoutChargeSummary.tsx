import {
  Card,
  CardBody,
  Text,
  CardHeader,
  Divider,
  HStack,
  Heading,
} from "@chakra-ui/react";

interface Props {
  price: string;
}

function CheckoutChargeSummary({ price }: Props) {
  return (
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
          <Text>{price}</Text>
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
            {price}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default CheckoutChargeSummary;
