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
  HStack,
} from "@chakra-ui/react";

interface Props {
  signInCollapsed: boolean;
  setSignInCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ signInCollapsed, setSignInCollapsed }: Props) {
  return (
    <Box
      display={signInCollapsed ? "none" : "auto"}
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(0,0,0,.8)"
      zIndex={1}
    >
      <Flex h="100%" w="100%" justify="center" align="center">
        <Card minW={{ base: "auto", md: "md" }}>
          <CardHeader>
            <HStack>
              <Text textStyle="h2" color="brand.500">
                Rent.Me
              </Text>
              <Box
                position="absolute"
                top="15px"
                right="15px"
                w="30px"
                h="30px"
                bg="rgba(0,0,0, .1)"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={() => setSignInCollapsed(true)}
              >
                <Icon as={RxCross1} />
              </Box>
            </HStack>
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
    </Box>
  );
}

export default Login;
