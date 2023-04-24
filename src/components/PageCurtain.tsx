import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  children: string;
}

function PageCurtain({ children }: Props) {
  return (
    <Flex
      as={motion.div}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0, transition: { delay: 2 } }}
      justify="center"
      align="center"
      w="100vw"
      h={`${window.innerHeight}px`}
      bg="brand.500"
      position="fixed"
      top="0"
      left="0"
      zIndex={2}
    >
      <Heading fontSize="6xl" color="white">
        {children}
      </Heading>
    </Flex>
  );
}

export default PageCurtain;
