import { RxCross1 } from "react-icons/rx";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Flex,
  Box,
  CardHeader,
  Input,
  Icon,
} from "@chakra-ui/react";

function Login() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(0,0,0,.3)"
    >
      <Flex h="100%" w="100%" justify="center" align="center">
        <Card minW="md">
          <CardHeader>
            <Text textStyle="h2" color="brand.500">
              Rent.Me
            </Text>
          </CardHeader>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Sign in</Heading>
              <Input placeholder="User Id" type="text" />
              <Input placeholder="Password" type="password" />
            </Stack>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="brand">
              Login
            </Button>
          </CardFooter>
        </Card>
      </Flex>
      <Box
        position="absolute"
        top="15px"
        right="15px"
        w="30px"
        h="30px"
        bg="rgba(0,0,0, .2)"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        <Icon as={RxCross1} />
      </Box>
    </Box>
  );
}

export default Login;
