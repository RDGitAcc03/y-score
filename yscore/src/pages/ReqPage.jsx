import React, {useEffect, useState} from 'react'
import {VStack, Flex, Heading} from "@chakra-ui/layout";
import './GraphPage.css'
import {Button, Box} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../contexts/userContext';

function ReqPage() {
  const [userData, setUserData] = useState({});
  const [dataObj, setDataObj] = useState({});

const { userDetails, setUserDetails, isUserLogged, setIsUserLogged } = useUserContext();  

  const objectCreator  = (key, value) => {
    switch (true) {
      case key === 'annual_inc':
        return {value: value, text:'Annual Income'};
      case key === 'tot_cur_bal':
        return {value: value, text:'Total Current Balance'};
      case key === 'emp_length':
        return {value: value, text:'Length of Employment'};
      case key === 'delinq_2yrs':
        return {value: value, text:'Number of 30+ Days Delinquencies in Past 2 Years'};
      case key === 'mo_sin_rcnt_rev_tl_op':
        return {value: value, text:'Months Since Last Account Was Open'};
      case key === 'mths_since_last_delinq':
        return {value: value, text:'Months Since Last Delinquency'};
      case key === 'mort_acc':
        return {value: value, text:'Number of Mortgages'};
      case key === 'mo_sin_old_rev_tl_op':
        return {value: value, text:'Months Since First Account Was Open'};
      case key === 'home_ownership':
        return {value: value, text:'home ownership'};
      case key === 'application_type_Individual':
        return {value: value, text:'Application Type (Single or Joint)'};
      case key === 'num_actv_bc_tl':
        return {value: value, text:'Number of Active Bank Accounts'};
    }
  }

  const setReqObj = () => {
    setTimeout(() => {
      const newObj = userDetails.data.most_affecting_params;
      const keys = Object.keys(newObj);
      const newestObj = keys.map(objKey => {
        return objectCreator(objKey, newObj[objKey]);
      })
      setDataObj(newestObj);
    },1000);
  }

  useEffect(() => {
    setUserData(userDetails.data);
    setReqObj();

  },[userDetails]);

    const navigate = useNavigate();
  return (
    <VStack>
      <Flex>
        <Heading>Recommendations for your credit Score</Heading>
      </Flex>

      <Box className="alignGraph">What affects your credit score the most?</Box>

      <Flex direction="row" width="50%">
        <Flex direction="column"  width="100%" mt="5rem">
          {dataObj.length ? dataObj.map((obj, index) => { if (obj.value >= 0) {
            return <Box key={index} ml="auto" p="1rem" width={`${obj.value * 20}px`} bgColor="#3de6b9">{obj.text}</Box>
          }
        }) : ''}
        </Flex>
        <Flex direction="column"  width="100%" mt="8.6rem" mb="3rem">
        {dataObj.length ? dataObj.map((obj, index) => { if (obj.value < 0) {
            return <Box key={index} p="1rem" width={`${obj.value * -20}px`} bgColor="#fd6262">{obj.text}</Box>
          }}) : ''
        }
        </Flex>
      </Flex>

      <Box boxShadow="base" p="6" rounded="md" bg="white" mb="2rem"> If your annual income is in range $20 000 - 40 000 and you apply for loan as a couple, your score will be 740.</Box>

      <Button
        bgColor="#3DE6B9"
        size="md"
        className="buttonColor"
        onClick={() => navigate(-1)}
      >
        Return
      </Button>
    </VStack>
  );
}

export default ReqPage;
