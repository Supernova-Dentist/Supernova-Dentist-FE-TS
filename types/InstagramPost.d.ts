type InstagramPost = {
  id: string;
  media_type: string;
  media_url: string;
  username: string;
  timestamp: string;
  caption: string;
  permalink: string;
};

type InstagramPostGridProps = {
  posts: InstagramPost[];
};
