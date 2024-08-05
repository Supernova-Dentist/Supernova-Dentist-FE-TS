type MediaPost = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
  alt_text?: string;
  class_list: string[];
};

type MediaProps = {
  mediaPosts: MediaPost[];
};
