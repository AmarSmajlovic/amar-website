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
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  &:hover {
    transform: scale(1.05);
    transition: 0.5s all;
  }
`;

const ModalResume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <StyledBox cursor="pointer" width={[100, 300, 300]} onClick={onOpen}>
        <Image src={ResumeScreenshot} alt="image-to-show" />
      </StyledBox>

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
    </Box>
  );
};

export default ModalResume;
