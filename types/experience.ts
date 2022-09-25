import { StaticImageData } from "next/image";
import { ReactNode } from "react";


export type TechImage = {
    image: StaticImageData,
    alt:string
};


export interface ExperienceCardType {
    companyLogo: ReactNode;
    role:string;
   workDate:string;
   techUsed:TechImage[];
    description:string[];
};
