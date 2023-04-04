import { ImgInterface } from "./img.interface";

export interface Technology {
    id: number;
    description: string;
    image: {
        landscape: string;
        portrait: string;
    };
    title: string;
}