export type NewsBlockType = "paragraph" | "image" | "highlight" | "cta";

export interface NewsBlock {
  type: NewsBlockType;
  text?: string;
  src?: string;
}

export interface NewsContent {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  blocks: NewsBlock[];
}

export interface NewsJSON {
  content: NewsContent;
}

export interface NewsProps {
  data: NewsJSON;
  onStartQuiz: () => void;
}
