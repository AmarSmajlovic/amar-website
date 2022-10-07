import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
}

const ModalShowImage = ({ image }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box cursor="pointer" width={[100, 300, 300]} onClick={onOpen}>
        <Image src={image} alt="image-to-show" />
      </Box>

      <Modal
        size={["full", "2xl"]}
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent height="100vh" boxShadow="none" bg="rgba(44,62,80,0)">
          <ModalCloseButton zIndex={999} />
          <ModalBody>
            <Image layout="fill" src={image} alt="full-size-image" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalShowImage;
