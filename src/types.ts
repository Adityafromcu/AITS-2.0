export interface Speaker {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
}

export interface Event {
  title: string;
  description: string;
  icon: string;
  time: string;
  date: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  url: string;
}