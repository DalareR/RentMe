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
    const timer = setInterval(() => {
      currentTestimonial === totalTestimonial - 1
        ? setCurrentTestimonial(0)
        : setCurrentTestimonial(currentTestimonial + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  return (
    <Flex justify="center" bg="brand.100" p={{ base: 5, md: 10 }}>
      <Flex direction="column" align="center">
        <Heading mb="5" color="brand.500" textAlign="center">
          What our customers say about us
        </Heading>
        {/* <Text>{currentTestimonial}</Text> */}
        <Flex gap="5" className="testimonialGroup">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="scroll"
            variant="outline"
            maxW={700}
            h={{ base: 600, md: 300 }}
            p={5}
          >
            <Image
              objectFit="cover"
              objectPosition="top"
              maxW={{ base: "100%", sm: "200px" }}
              maxH={{ base: "200px", lg: "400px" }}
              src={testimonial[currentTestimonial].userImg}
              alt="Photo of a happy customer"
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
