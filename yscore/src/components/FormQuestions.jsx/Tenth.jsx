import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Button, FormLabel} from "@chakra-ui/react";
import React from "react";

export default function Tenth(props) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel>How long ago was your last delinquency?</FormLabel>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Button
          value="-1"
          name="mths_since_last_delinq"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Never
        </Button>
        <Button
          value="1"
          name="mths_since_last_delinq"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Less than 6 months
        </Button>
        <Button
          value="2"
          name="mths_since_last_delinq"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          6 months - 1 year
        </Button>
        <Button
          value="3"
          name="mths_since_last_delinq"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          1 - 2 year
        </Button>
        <Button
          value="4"
          name="mths_since_last_delinq"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          More than 3 years
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
