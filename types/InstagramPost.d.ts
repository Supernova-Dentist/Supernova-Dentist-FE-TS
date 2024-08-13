type InstagramPost = {
  id: string;
  media_type: string;
  media_url: string;
  username: string;
  timestamp: string;
  caption: string;
  permalink: string;
  like_count?: number;
  comments_count?: number;
};

type InstagramPostGridProps = {
  posts: InstagramPost[];
};
