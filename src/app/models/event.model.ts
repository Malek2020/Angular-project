import { Feedback } from "./feedback.model";

export interface Event {
    id: number;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    likes: number;
    dislikes: number;
    feedbacks: Feedback[];
  }
  
  