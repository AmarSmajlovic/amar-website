import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { ResumeScreenshot } from "../../assets";
import { DownloadIcon } from "@chakra-ui/icons";

const ModalResume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Resume</Button>

      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`"It's not a bug, It's a feature!"`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={ResumeScreenshot} alt="resume-image" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button as="a" href="AmarResume.pdf" download variant="ghost">
              <Text pr={1}>Download</Text> <DownloadIcon />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalResume;
