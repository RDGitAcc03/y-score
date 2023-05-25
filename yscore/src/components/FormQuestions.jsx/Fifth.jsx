import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Button, FormLabel} from "@chakra-ui/react";
import React from "react";

export default function Fifth(props) {
  const { handleChange, question, setQuestion } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel>How many active bank accounts do you have?</FormLabel>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Button
          name="num_actv_bc_tl"
          value="0"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          0
        </Button>
        <Button
          name="num_actv_bc_tl"
          value="1"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          1
        </Button>
        <Button
          name="num_actv_bc_tl"
          value="2"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          2
        </Button>
        <Button
          name="num_actv_bc_tl"
          value="3"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          3
        </Button>
        <Button
          name="num_actv_bc_tl"
          value="4"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          4-5
        </Button>
        <Button
          name="num_actv_bc_tl"
          value="5"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          6 - 8
        </Button>
        <Button
          name="num_actv_bc_tl"
          value="6"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          9 - 12
        </Button>
        <Button
          name="num_actv_bc_tl"
          value="7"
          py="2rem"
          px="5rem"
          onClick={(e) => {
            handleChange(e);
            setQuestion(question + 1);
          }}
        >
          More than 12
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
