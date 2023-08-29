import { useParams } from 'react-router-native';
import useReviews from '../hooks/useReviews';
import ReviewItem from './ReviewItem';

export const ReviewListContainer = ({ reviews }) => {
  const reviewNodes = reviews ? reviews.reviews.edges.map((edge) => edge.node) : [];
  


  return (
reviewNodes.map((review) =>
<ReviewItem key={review.id} item={review} />
)
  );
};

const ReviewList = () => {
  const id = useParams();

  const { reviews } = useReviews(id);
  if (!reviews) return null;

  return <ReviewListContainer reviews={reviews} />
};

export default ReviewList;