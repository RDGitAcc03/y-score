import { Box, Flex } from "@chakra-ui/layout";
import { Button, FormLabel} from "@chakra-ui/react";
import React from "react";

export default function Second(props, { x }) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel mb="2rem">What is your living situation?</FormLabel>
      </Flex>
      <Flex alignItems="center" gap={4} justifyContent="center">
        <Button
          name="home_ownership"
          value="0"
          p="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Renting
        </Button>
        <Button
          name="home_ownership"
          value="1"
          p="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Owner
        </Button>
        <Button
          name="home_ownership"
          value="2"
          p="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Mortgage
        </Button>
        <Button
          name="home_ownership"
          value="3"
          p="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Other
        </Button>
      </Flex>
      <Button
        mt={5}
        bgColor="#3DE6B9"
        color="white"
        onClick={() => {
          setQuestion(question - 1);
        }}
      >
        Previous
      </Button>
    </Box>
  );
}
