type GoogleReviewProps = {
  id?: number;
  name: string;
  date: string;
  review: string;
  rating: number;
  url: string;
  previewUrl: string;
  onClickReview?: ({ name, date, review, rating, url, previewUrl }) => void;
};
