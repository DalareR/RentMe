import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Login from "./Login";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [signInCollapsed, setSignInCollapsed] = useState(true);

  return (
    <>
      <HStack
        justify="space-between"
        p="5px"
        boxShadow={"0 5px 10px rgba(0,0,0, .2)"}
      >
        <Link to="/">
          <Text color="brand.500" fontSize="2xl" fontWeight="bold">
            Rent.me
          </Text>
        </Link>
        <HStack>
          <Text fontWeight="bold" color="brand.500">
            1(717)123-4567
          </Text>
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={() => setSignInCollapsed(false)}
          >
            Sign in
          </Button>
        </HStack>
      </HStack>
      <Login
        signInCollapsed={signInCollapsed}
        setSignInCollapsed={setSignInCollapsed}
      />
    </>
  );
}

export default NavBar;
