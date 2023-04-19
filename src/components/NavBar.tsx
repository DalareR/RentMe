import { Button, HStack, Text } from "@chakra-ui/react";

function NavBar() {
  return (
    <HStack justify="space-between" p="5px">
      <Text color="brand.500" fontSize="2xl" fontWeight="bold">
        Rent.me
      </Text>
      <Button variant="outline" colorScheme="teal">
        Sign in
      </Button>
    </HStack>
  );
}

export default NavBar;
