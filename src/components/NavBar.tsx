import { Button, HStack, Text } from "@chakra-ui/react";
import Login from "./Login";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [signInCollapsed, setSignInCollapsed] = useState(true);

  return (
    <>
      <HStack justify="space-between" p="5px">
        <Link to="/">
          <Text color="brand.500" fontSize="2xl" fontWeight="bold">
            Rent.me
          </Text>
        </Link>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={() => setSignInCollapsed(false)}
        >
          Sign in
        </Button>
      </HStack>
      <Login
        signInCollapsed={signInCollapsed}
        setSignInCollapsed={setSignInCollapsed}
      />
    </>
  );
}

export default NavBar;
