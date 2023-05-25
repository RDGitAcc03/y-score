import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Button, FormLabel } from "@chakra-ui/react";
import React from "react";

export default function Eleventh(props) {
  
  const {
    handleChange,
    question,
    setQuestion,
    handleSubmit,
    isLastQClicked,
    setIsLastQClicked,
  } = props;
  return (
    <Box width="100%" my="2rem" boxShadow="base" p="6" rounded="md" bg="white">
      <Flex justifyContent="center">
        <FormLabel>how many mortgages do you have?</FormLabel>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Button
          value="0"
          name="mort_acc"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setIsLastQClicked(true);
          }}
        >
          None
        </Button>
        <Button
          value="1"
          name="mort_acc"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setIsLastQClicked(true);
          }}
        >
          1
        </Button>
        <Button
          value="2"
          name="mort_acc"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setIsLastQClicked(true);
          }}
        >
          2
        </Button>
        <Button
          value="3"
          name="mort_acc"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setIsLastQClicked(true);
          }}
        >
          3
        </Button>
        <Button
          value="4"
          name="mort_acc"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setIsLastQClicked(true);
          }}
        >
          4
        </Button>
        <Button
          value="5"
          name="mort_acc"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setIsLastQClicked(true);
          }}
        >
          5
        </Button>
        <Button
          value="6"
          name="mort_acc"
          py="2rem"
          onClick={(e) => {
            handleChange(e);
            setIsLastQClicked(true);
          }}
        >
          More than 5
        </Button>
      </Grid>
      <Flex justifyContent="space-between">
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
        <br />

        {!!isLastQClicked ? (
          <Button
          
            mt={5}
            bgColor="#3DE6B9"
            color="white"
            colorScheme="teal"
            onClick={handleSubmit}
          >
            Submit!
          </Button>
        ) : (
          <Button
          disabled
            mt={5}
            bgColor="#3DE6B9"
            color="white"
            colorScheme="teal"
            onClick={handleSubmit}
          >
            Submit!
          </Button>
        )}
      </Flex>
    </Box>
  );
}
