export type LiveGig = {
  id: string;
  date: string;
  time: string;
  place: string;
  placeUrl?: string;
  city: string;
  ticketsUrl: string;
};

export const liveGigs: LiveGig[] = [
  {
    id: '1',
    date: '22. 12. 2026',
    time: '19:00',
    place: 'KLUB 007 STRAHOV',
    placeUrl: 'https://www.klub007strahov.cz',
    city: 'PRAHA',
    ticketsUrl: 'https://www.klub007strahov.cz',
  },
];
