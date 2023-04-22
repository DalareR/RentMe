import {
  Box,
  Text,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box p="20px">
      <Heading size="lg" color="brand.500">
        Rent.me
      </Heading>
      <Divider />
      <Grid
        gridTemplateColumns={{ md: "1fr 1fr" }}
        gridTemplateRows={{ base: `1fr 1fr`, md: "auto" }}
        mt={5}
      >
        <GridItem>
          <Box>
            <Heading size="md">Address</Heading>
            <Text>234 Locust St, Suit A12</Text>
            <Text>Lancaster, PA</Text>
            <Text>17601</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Flex
            h="100%"
            justify={{ base: "center", md: "end" }}
            align="center"
            gap={5}
          >
            <Link to="https://www.facebook.com">
              <Icon as={AiFillFacebook} boxSize={8} cursor="pointer" />
            </Link>
            <Link to="https://www.instagram.com">
              <Icon as={AiFillInstagram} boxSize={8} cursor="pointer" />
            </Link>
            <Link to="https://www.twitter.com">
              <Icon as={AiFillTwitterCircle} boxSize={8} cursor="pointer" />
            </Link>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Footer;
