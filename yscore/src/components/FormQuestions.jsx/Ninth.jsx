import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Button, FormLabel} from "@chakra-ui/react";
import React from "react";

export default function Ninth(props) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel>
          how many times in the last two years did you miss a payment on any of
          your credit accounts?
        </FormLabel>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Button
        value="0"
        name="delinq_2yrs"
        py="2rem"
        onClick={(e) => {
          handleChange(e);
          setQuestion(question + 1);
        }}
      >
        None
      </Button>
      <Button
        value="1"
        name="delinq_2yrs"
        py="2rem"
        onClick={(e) => {
          handleChange(e);
          setQuestion(question + 1);
        }}
      >
        1
      </Button>
      <Button
        value="2"
        name="delinq_2yrs"
        py="2rem"
        onClick={(e) => {
          handleChange(e);
          setQuestion(question + 1);
        }}
      >
        2
      </Button>
      <Button
        value="3"
        name="delinq_2yrs"
        py="2rem"
        onClick={(e) => {
          handleChange(e);
          setQuestion(question + 1);
        }}
      >
        3
      </Button>
      <Button
        value="4"
        name="delinq_2yrs"
        py="2rem"
        onClick={(e) => {
          handleChange(e);
          setQuestion(question + 1);
        }}
      >
        4
      </Button>
      <Button
        value="5"
        name="delinq_2yrs"
        py="2rem"
        onClick={(e) => {
          handleChange(e);
          setQuestion(question + 1);
        }}
      >
        5
      </Button>
      <Button
        value="6"
        name="delinq_2yrs"
        py="2rem"
        onClick={(e) => {
          handleChange(e);
          setQuestion(question + 1);
        }}
      >
        More than 5 times
      </Button>
      </Grid>
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
