import theme from '../../theme'
import Text from '../Text';
import { format } from 'date-fns'
import { View, StyleSheet } from 'react-native';

const Item = ({ item }) => {
  const repository = item.id
  const [, repoMaker, repoName ] = repository.split('.')

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      display: 'flex',
      padding: 10,
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

  const formattedDate = format(new Date(item.createdAt), 'dd.MM.yyyy')

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>

      <View style={styles.infoContainer}>

          <Text fontWeight="bold">{repoMaker}/{repoName}</Text>



          <Text color="textSecondary">{formattedDate}</Text>



          <Text style={styles.reviewText}>{item.text}</Text>

      </View>
    </View>
  );
};

export default Item;
