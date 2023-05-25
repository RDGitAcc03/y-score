import { Box, Flex } from "@chakra-ui/layout";
import { Button, FormLabel } from "@chakra-ui/react";
import React from "react";
import { Grid} from "@chakra-ui/react";

export default function Heighth(props) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel>How long have you been employed?</FormLabel>
      </Flex>
      <Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Button
            name="emp_length"
            value="0"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            Less than a year
          </Button>
          <Button
            name="emp_length"
            value="1"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            1 year
          </Button>
          <Button
            name="emp_length"
            value="2"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            2 years
          </Button>

          <Button
            name="emp_length"
            value="3"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            3 years
          </Button>
          <Button
            name="emp_length"
            value="4"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            4 years
          </Button>
          <Button
            name="emp_length"
            value="5"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            5 years
          </Button>

          <Button
            name="emp_length"
            value="6"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            6 years
          </Button>
          <Button
            name="emp_length"
            value="7"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            7 years
          </Button>
          <Button
            name="emp_length"
            value="8"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            8 years
          </Button>

          <Button
            name="emp_length"
            value="9"
            py="2rem"
            px="4rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            9 years
          </Button>
          <Button
            name="emp_length"
            value="10"
            py="2rem"
            px="5rem"
            onClick={(e) => {
              handleChange(e);
              setQuestion(question + 1);
            }}
          >
            More than 10 years
          </Button>
        </Grid>
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
