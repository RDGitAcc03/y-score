import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Button, FormLabel} from "@chakra-ui/react";
import React from "react";

export default function Fourth(props) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel>When did you open your first bank account?</FormLabel>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Button
          value="0"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Less than 6 month
        </Button>
        <Button
          value="1"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          6 month - 1 year
        </Button>
        <Button
          value="2"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          1 - 2 years
        </Button>
        <Button
          value="3"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          2 - 3 years
        </Button>
        <Button
          value="4"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          3 - 5 years
        </Button>
        <Button
          value="5"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          5 - 7 years
        </Button>
        <Button
          value="6"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          7 - 10 years
        </Button>
        <Button
          value="7"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          10 - 15 years
        </Button>
        <Button
          value="8"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          15 - 20 years
        </Button>
        <Button
          value="9"
          name="mo_sin_old_rev_tl_op"
          py="2rem"
          px="4rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          More than 20 years
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
