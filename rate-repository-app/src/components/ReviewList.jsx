import { useParams } from 'react-router-native';
import useReviews from '../hooks/useReviews';
import ReviewItem from './ReviewItem';
import { FlatList } from 'react-native';


// const styles = StyleSheet.create({
//   separator: {
//     height: 10,
//   },
// });


// const ItemSeparator = () => <View style={styles.separator} />;

export const ReviewListContainer = ({ reviews }) => {
  const reviewNodes = reviews
    ? reviews.reviews.edges.map((edge) => edge.node)
    : [];

    return (
      <FlatList
        data={reviewNodes}
        // ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReviewItem item={item} />
        )}
      />
    );

  // return reviewNodes.map((review) => (
  //   <ReviewItem key={review.id} item={review} />
  // ));
};

const ReviewList = () => {
  const id = useParams();

  const { reviews } = useReviews(id);

  if (!reviews) return null;

  return <ReviewListContainer reviews={reviews} />;
};

export default ReviewList;
