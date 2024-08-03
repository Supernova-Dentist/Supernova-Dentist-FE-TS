type RenderedString = {
  rendered: string;
};

type Post = {
  id: number;
  date: string;
  title: RenderedString;
  excerpt: RenderedString;
  content: RenderedString;
  author: number;
  [key: string]: any; // Allow additional properties
};
