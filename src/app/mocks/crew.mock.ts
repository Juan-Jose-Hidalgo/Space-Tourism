import { CrewMember } from "../models/crew-member.interface";

export const crew: CrewMember[] = [
    {
        id: 1,
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: {
            png: '/assets/img/crew/image-douglas-hurley.png',
            webp: '/assets/img/crew/image-douglas-hurley.webp'
        },
        name: 'Douglas Hurley',
        rank: 'Commander'
    },
    {
        id: 2,
        bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image: {
            png: '/assets/img/crew/image-mark-shuttleworth.png',
            webp: '/assets/img/crew/image-mark-shuttleworth.webp'
        },
        name: 'Mark Shuttleworth',
        rank: 'Mission Specialist'
    },
    {
        id: 3,
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        image: {
            png: '/assets/img/crew/image-victor-glover.png',
            webp: '/assets/img/crew/image-victor-glover.webp'
        },
        name: 'Victor Glover',
        rank: 'Pilot'
    },
    {
        id: 4,
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        image: {
            png: '/assets/img/crew/image-anousheh-ansari.png',
            webp: '/assets/img/crew/image-anousheh-ansari.webp'
        },
        name: 'Anousheh Ansari',
        rank: 'Flight Engineer'
    }
]