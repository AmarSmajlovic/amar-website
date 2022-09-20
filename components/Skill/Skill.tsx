import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  src: string | StaticImageData;
}

const Skill = ({ src }: Props) => {
  return (
    <motion.div
      style={{
        width: "70px",
        height: "70px",
        border: "1px solid #1a202c",
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Image src={src} alt="html" />
    </motion.div>
  );
};

export default Skill;
