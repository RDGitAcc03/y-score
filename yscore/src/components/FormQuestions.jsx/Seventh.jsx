import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Button, FormLabel} from "@chakra-ui/react";
import React from "react";

export default function Seventh(props) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel>
          What is your current total bank balance? (Add up the balances on all
          your accounts.)
        </FormLabel>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Button
          value="0"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          Less than $10.000
        </Button>
        <Button
          value="1"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $10.000 - 20.000
        </Button>
        <Button
          value="2"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $20.000 - 30.000
        </Button>
        <Button
          value="3"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $30.000 - 50.000
        </Button>
        <Button
          value="4"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $50.000 - 70.000
        </Button>
        <Button
          value="5"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $70.000 - 100.000
        </Button>
        <Button
          value="6"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $100.000 - 200.000
        </Button>
        <Button
          value="7"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $200.000 - 300.000
        </Button>
        <Button
          value="8"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          $300.000 - 500.000
        </Button>
        <Button
          value="9"
          name="tot_cur_bal"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          More than $500.000
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
