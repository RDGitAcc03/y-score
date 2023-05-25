import React from 'react';
import { Button, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';

function DasboardModals({title, text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} backgroundColor="rgb(64, 233, 187)" color="white" size={'xs'}>See More</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
                <Text p={'12px 24px'}>{text}</Text>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose} display="block" backgroundColor="rgb(64, 233, 187)">
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default DasboardModals