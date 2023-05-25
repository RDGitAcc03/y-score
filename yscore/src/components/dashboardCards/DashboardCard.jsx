import React from 'react';
import { Box, Heading, Text, HStack, Flex } from '@chakra-ui/react';
import DasboardModals from './DasboardModals';

function DashboardCard({Icon, title, text}) {
  return (
    <HStack spacing={8} maxW={'550px'} className="dasboard-card" backgroundColor={'white'}>
      <Flex  p={5} shadow='md' borderWidth='1px'> 
        <Box w="17%" borderRight={'1px solid grey'}>
          <Icon className={'dashboard-icons'} />
        </Box>
        <Box w="83%" pl={'20px'}>
          <Heading fontSize='m'>{title}</Heading>
          <Text mt={4}>{text}</Text>
          <DasboardModals  title={title} text={text} />
        </Box>
      </Flex>
    </HStack>
  )
}

export default DashboardCard