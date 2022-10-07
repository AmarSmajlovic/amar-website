import React from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { ResumeScreenshot } from "../../assets";
import { DownloadIcon } from "@chakra-ui/icons";

const ModalResume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box cursor="pointer" width={[100, 300, 300]} onClick={onOpen}>
        <Image src={ResumeScreenshot} alt="image-to-show" />
      </Box>

      <Modal
        size={["full", "2xl"]}
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent height="100vh">
          <ModalCloseButton zIndex={999} />
          <ModalBody>
            <Image layout="fill" src={ResumeScreenshot} alt="resume-image" />
          </ModalBody>
          <ModalFooter>
            <Button as="a" href="AmarResume.pdf" download variant="link">
              <DownloadIcon />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalResume;
