import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Button, FormLabel} from "@chakra-ui/react";

export default function Sixth(props) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel>What is your annual income?</FormLabel>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Button
          value="0"
          name="annual_inc"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Less than $20.000
        </Button>
        <Button
          value="1"
          name="annual_inc"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $20.000 - 40.000
        </Button>
        <Button
          value="2"
          name="annual_inc"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $40.000 - 60.000
        </Button>
        <Button
          value="3"
          name="annual_inc"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $60.000 - 80.000
        </Button>
        <Button
          value="4"
          name="annual_inc"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $80.000 - 100.000
        </Button>
        <Button
          value="5"
          name="annual_inc"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $100.000 - 150.000
        </Button>
        <Button
          value="6"
          name="annual_inc"
          px="5rem"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          More than $150.000
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
