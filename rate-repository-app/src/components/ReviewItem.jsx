import { View, Image, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const ReviewItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      display: 'flex',
      padding: 10,
      borderWidth: 1,
      borderBlockColor: 'black',
      flexDirection: 'row',
    },
    rating: {
      borderColor: theme.colors.primary,
      borderWidth: 3,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    ratingText: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
    infoContainer: {
      paddingStart: 10
    },
    reviewText: {
      paddingTop: 10,
      paddingRight: 30,
      marginRight: 20
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>

      <View style={styles.infoContainer}>

          <Text fontWeight="bold">{item.user.username}</Text>



          <Text color="textSecondary">{item.createdAt}</Text>



          <Text style={styles.reviewText}>{item.text}</Text>

      </View>
    </View>
  );
};

export default ReviewItem;
