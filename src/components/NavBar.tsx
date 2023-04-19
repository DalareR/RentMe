import { Button, HStack, Text } from "@chakra-ui/react";

interface Props {
  setSignInCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBar({ setSignInCollapsed }: Props) {
  return (
    <HStack justify="space-between" p="5px">
      <Text color="brand.500" fontSize="2xl" fontWeight="bold">
        Rent.me
      </Text>
      <Button
        variant="outline"
        colorScheme="teal"
        onClick={() => setSignInCollapsed(false)}
      >
        Sign in
      </Button>
    </HStack>
  );
}

export default NavBar;
