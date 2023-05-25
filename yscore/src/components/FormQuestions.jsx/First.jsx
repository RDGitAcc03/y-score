import { Box, Flex } from "@chakra-ui/layout";
import { Button, FormLabel } from "@chakra-ui/react";
import React from "react";


export default function First(props) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box
      width="100%"
      boxShadow="base"
      p="2rem"
      rounded="md"
      bg="white"
      mt="2rem"
    >
      <Flex justifyContent="center">
        <FormLabel mb="2rem">Application type?</FormLabel>
      </Flex>
      <Flex alignItems="center" gap={4} justifyContent="center">
        <Button
          name="application_type"
          value="0"
          p="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Individual
        </Button>
        <Button
          name="application_type"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
          p="2rem"
          value="1"
        >
          Joint application
        </Button>
      </Flex>
    </Box>
  );
}
