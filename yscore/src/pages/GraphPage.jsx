import React from 'react'
import {VStack, Flex, Heading} from "@chakra-ui/layout"
import Graph from '../components/Graph'
import './GraphPage.css'
import {Button} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function GraphPage() {
    const navigate = useNavigate();
  return (
    <VStack >
        <Flex>
            <Heading>
            Your <b>Score History</b>
            </Heading>
        </Flex>
        <Flex>
            View and monitor your credit history 
        </Flex>
        <div className='alignGraph'>
        <Graph/>
        </div>
        <Button bgColor='#3DE6B9' size='md' className='buttonColor' onClick={() => navigate(-1)}>
   Return
  </Button>
    </VStack>
  )
}

export default GraphPage