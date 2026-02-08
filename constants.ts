import { Memory, Reason } from './types';

export const MEMORIES: Memory[] = [
  {
    id: 1,
    title: "The First Hello",
    date: "Spring 2023",
    description: "The moment our eyes met, I knew there was something special about you.",
    icon: "Coffee"
  },
  {
    id: 2,
    title: "Our First Trip",
    date: "Summer 2023",
    description: "Lost in the city streets, finding our way together and laughing at the rain.",
    icon: "MapPin"
  },
  {
    id: 3,
    title: "Late Night Talks",
    date: "Autumn 2023",
    description: "Staying up until 3AM talking about everything and nothing. My favorite conversations.",
    icon: "Moon"
  },
  {
    id: 4,
    title: "A New Chapter",
    date: "Winter 2024",
    description: "Every day with you feels like a new adventure I never want to end.",
    icon: "Heart"
  }
];

export const REASONS: Reason[] = [
  {
    id: 1,
    title: "Your Kindness",
    description: "The way you treat everyone with such warmth and compassion inspires me daily."
  },
  {
    id: 2,
    title: "Your Smile",
    description: "It literally lights up the darkest rooms and makes my worst days better."
  },
  {
    id: 3,
    title: "Your Ambition",
    description: "Watching you chase your dreams motivates me to be a better person."
  },
  {
    id: 4,
    title: "Our Laughter",
    description: "We have our own language of joy, and I never want to stop laughing with you."
  }
];

// Using a stable MP3 link for better browser compatibility (Chopin's Nocturne Op. 9 No. 2)
export const BACKGROUND_MUSIC_URL = "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9d/Chopin_Nocturne_Op_9_No_2_E_Flat_Major.ogg/Chopin_Nocturne_Op_9_No_2_E_Flat_Major.ogg.mp3";