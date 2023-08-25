import { Text } from 'react-native';
import { useParams } from 'react-router-native';
import useReviews from '../hooks/useReviews';
import ReviewItem from './ReviewItem';

export const ReviewListContainer = ({ reviews }) => {
  const reviewNodes = reviews ? reviews.reviews.edges.map((edge) => edge.node) : [];
  
  const mockReview = {
    "__typename": "Review",
    "id": "753f3e99-e73a-43a3-9a50-b30d7727c0eb.jaredpalmer.formik",
    "text": "Lorem ipsum dolor sit amet, per brute apeirian ei. Malis facilisis vel ex, ex vivendo signiferumque nam, nam ad natum electram constituto. Causae latine at sea, ex nec ullum ceteros, est ut dicant splendide. Omnis electram ullamcorper est ut.",
    "rating": 96,
    "createdAt": "2023-08-22T06:17:10.386Z",
    "user": {
        "__typename": "User",
        "id": "753f3e99-e73a-43a3-9a50-b30d7727c0eb",
        "username": "leeroyjenkins"
    }
}

  return (
    <ReviewItem item={mockReview} />
  );
};

const ReviewList = () => {
  const id = useParams();

  const { reviews } = useReviews(id);
  if (!reviews) return null;

  return <ReviewListContainer reviews={reviews} />
};

export default ReviewList;

// const repositoryNodes = repositories
// ? repositories.edges.map(edge => edge.node)
// : [];

// const reviewsArray = data.reviews.edges.map(edge => edge.node);
