export interface Destination {
    id: number;
    description: string;
    distance: string;
    image: DestinationImage;
    name: string;
    travelTime: string;
}

interface DestinationImage{
    png: string;
    webp: string;
}