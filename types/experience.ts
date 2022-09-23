import { ReactNode } from "react";

export interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type TechImage = {
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
