import {
  Image,
  Text,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { testimonial } from "../data/testimonial";

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const totalTestimonial = testimonial.length;

  useEffect(() => {
    setInterval(() => {
      currentTestimonial === totalTestimonial - 1
        ? setCurrentTestimonial(0)
        : setCurrentTestimonial(currentTestimonial + 1);
    }, 10000);
  }, [currentTestimonial]);

  return (
    <Flex justify="center" bg="brand.100" p="10">
      <Flex direction="column" align="center">
        <Heading mb="5" color="brand.500">
          What our customers say about us
        </Heading>
        <Flex gap="5" className="testimonialGroup">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            maxW={700}
            h={300}
            p={5}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              maxH={{ base: "100%", sm: "400px" }}
              src={testimonial[currentTestimonial].userImg}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Text py="2">{testimonial[currentTestimonial].desc}</Text>
                <Text as="i">- {testimonial[currentTestimonial].name}</Text>
              </CardBody>
            </Stack>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Testimonial;
