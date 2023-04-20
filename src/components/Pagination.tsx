import { Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import _ from "lodash";
import { CarDetail } from "../App";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface Props {
  items: CarDetail[];
  maxItemsInPage: number;
  activePage: number;
  onActivePageClick: (page: number) => void;
}

function Pagination({
  items,
  maxItemsInPage,
  activePage,
  onActivePageClick,
}: Props) {
  const pages = Math.ceil(items.length / maxItemsInPage);
  const pagesArray = _.range(1, pages);
  const [index, setIndex] = useState(0);
  return (
    <HStack>
      {pagesArray.length > 5 ? (
        <HStack>
          <Flex
            display={index === 0 ? "none" : "flex"}
            w="30px"
            h="30px"
            justify="center"
            align="center"
            outline="1px solid teal"
            borderRadius="5px"
            cursor="pointer"
            onClick={() => {
              if (index <= 0) null;
              else {
                setIndex((prev) => prev - 5);
                onActivePageClick(index - 4);
              }
            }}
          >
            <Icon as={GrFormPrevious} />
          </Flex>

          {pagesArray.slice(index, index + 5).map((page) => (
            <Flex
              key={page}
              w="30px"
              h="30px"
              justify="center"
              align="center"
              color={activePage === page ? "white" : "teal"}
              outline="1px solid teal"
              borderRadius="5px"
              bg={activePage === page ? "teal" : "none"}
              cursor="pointer"
              onClick={() => onActivePageClick(page)}
            >
              <Text>{page}</Text>
            </Flex>
          ))}
          <Flex
            display={index === pages - 5 ? "none" : "flex"}
            w="30px"
            h="30px"
            justify="center"
            align="center"
            outline="1px solid teal"
            borderRadius="5px"
            cursor="pointer"
            onClick={() => {
              if (index >= pages - 5) null;
              else {
                setIndex((prev) => prev + 5);
                onActivePageClick(index + 6);
              }
            }}
          >
            <Icon as={GrFormNext} />
          </Flex>
        </HStack>
      ) : (
        pagesArray.map((page) => (
          <Flex
            key={page}
            w="30px"
            h="30px"
            justify="center"
            align="center"
            color={activePage === page ? "white" : "teal"}
            outline="1px solid teal"
            borderRadius="5px"
            bg={activePage === page ? "teal" : "none"}
            cursor="pointer"
            onClick={() => onActivePageClick(page)}
          >
            <Text>{page}</Text>
          </Flex>
        ))
      )}
    </HStack>
  );
}

export default Pagination;
