import { Destination } from "../models/destination.interface";

export const destinations: Destination[] = [
    {
        id: 1,
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        image: {
            png: '/assets/img/destination/image-moon.png',
            webp: '/assets/img/destination/image-moon.webp'
        },
        name: 'Moon',
        travelTime: '3 Days'
    },
    {
        id: 2,
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. km',
        image: {
            png: '/assets/img/destination/image-mars.png',
            webp: '/assets/img/destination/image-mars.webp'
        },
        name: 'Mars',
        travelTime: '9 months'
    },
    {
        id: 3,
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. km',
        image: {
            png: '/assets/img/destination/image-europa.png',
            webp: '/assets/img/destination/image-europa.webp'
        },
        name: 'Europa',
        travelTime: '3 years'
    },
    {
        id: 4,
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL. km',
        image: {
            png: '/assets/img/destination/image-titan.png',
            webp: '/assets/img/destination/image-titan.webp'
        },
        name: 'Titan',
        travelTime: '7 years'
    }
]