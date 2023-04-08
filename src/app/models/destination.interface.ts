import { ImgInterface } from "./img.interface";

export interface Destination {
    id: number;
    description: string;
    distance: string;
    image: ImgInterface;
    name: string;
    travelTime: string;
}