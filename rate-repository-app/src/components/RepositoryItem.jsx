import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
// import theme from '../theme';
import { convertToKiloFormat } from '../utils/convertToKiloFormat';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 10,
  },
  bottomdiv: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  statitem: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 7,
    borderRadius: 5,
    flex: 0,
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    marginTop: 5
  }
});

const StatItem = ({ heading, value }) => {
  return (
    <View>
      <Text style={styles.statitem} fontWeight='bold'>
        {convertToKiloFormat(value)}
      </Text>
      <Text style={styles.statitem}>{heading}</Text>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.tinyLogo} source={{ uri: item.ownerAvatarUrl }} />

        <View>
          <Text style={styles.text} fontWeight='bold'>{item.fullName}</Text>
          <Text style={styles.text} color='textSecondary'>{item.description}</Text>
          <Text style={styles.button}>{item.language}</Text>
        </View>

      </View>

      <View style={styles.bottomdiv}>
        <StatItem heading='Stars' value={item.stargazersCount} />
        <StatItem heading='Forks' value={item.forksCount} />
        <StatItem heading='Reviews' value={item.reviewCount} />
        <StatItem heading='Rating' value={item.ratingAverage} />
      </View>

    </View>
  );
};

export default RepositoryItem;
