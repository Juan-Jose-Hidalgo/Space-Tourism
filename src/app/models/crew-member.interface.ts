import { ImgInterface } from "./img.interface";

export interface CrewMember {
    id: number;
    bio: string;
    image: ImgInterface;
    name: string;
    rank: string;
}