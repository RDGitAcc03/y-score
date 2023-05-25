import React, { useState, useEffect } from 'react';
import { Text, Heading, Flex } from '@chakra-ui/react';

function ProfileExplanationText({mainScore}) {
    const [title, setTitle ] = useState('');
    const [text, setText ] = useState('');

    const setContent = (score) => {
        switch (true) {
            case score > 799:
                setTitle('Excellent');
                setText('You are considered to be a low-risk borrower. You may have an easier time securing a loan than borrowers with lower scores.');
              break;
            case score > 739:
                setTitle('Very Good');
                setText('You have demonstrated a history of positive credit behavior and may have an easier time being approved for additional credit.');
              break;
            case score > 669:
                setTitle('Good');
                setText('Lenders generally view those with credit scores of 670 and up as acceptable or lower-risk borrowers.');
              break;
            case score > 579:
                setTitle('Fair');
                setText('Individuals in this category are often considered “subprime” borrowers. Lenders may consider them higher-risk, and they may have trouble qualifying for new credit.');
              break;
            case score > 299:
                setTitle('Poor');
                setText(`Individuals in this range often have difficulty being approved for new credit. If you find yourself in the poor category, it's likely you'll need to take steps to improve your credit score before you can secure any new credit.`);
              break;
          }
    }

    useEffect(() => {
        setContent(mainScore);
    },[mainScore]);

  return (
    <Flex direction={'column'} align={'center'}>
        <Heading pb={'16px'}>{title}</Heading>
        <Text pb={'26px'}>{text}</Text>
    </Flex>
  )
}

export default ProfileExplanationText