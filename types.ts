export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: string; // Lucide icon name or emoji
}

export interface Reason {
  id: number;
  title: string;
  description: string;
}

export interface Song {
  title: string;
  src: string;
}