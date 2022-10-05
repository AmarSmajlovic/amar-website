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
      <Box width={100} onClick={onOpen}>
        <Image src={image} alt="image-to-show" />
      </Box>

      <Modal
        size="full"
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent bg="rgba(44,62,80,0)">
          <ModalCloseButton zIndex={999} />
          <ModalBody>
            <Image
              style={{ filter: "drop-shadow(20px 15px 20px #000)" }}
              layout="fill"
              src={image}
              alt="full-size-image"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalShowImage;
