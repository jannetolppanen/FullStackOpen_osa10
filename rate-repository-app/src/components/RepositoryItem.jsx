import { View, Image, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { convertToKiloFormat } from '../utils/convertToKiloFormat';
import theme from '../theme';
import Button from './Button';
import { useNavigate } from 'react-router-native';
import { Linking } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    padding: 10,
    marginBottom: 10
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
    marginBottom: 5,
  },
  text: {
    marginTop: 5,
  },
});

const StatItem = ({ heading, value }) => {
  return (
    <View>
      <Text style={styles.statitem} fontWeight='bold' testID={heading}>
        {convertToKiloFormat(value)}
      </Text>
      <Text style={styles.statitem}>{heading}</Text>
    </View>
  );
};

const RepositoryItem = ({ item, githuburl }) => {
  const navigate = useNavigate()
  const { id, url } = item
  const handleClick = () => navigate(`repository/${id}`)
  const linkToGithub = () => {
    Linking.openURL(url)
  }

  return (
    <Pressable onPress={handleClick} >
      <View style={styles.container}>
        <View testID='repositoryItem' style={{ flexDirection: 'row' }}>
          <Image
            style={styles.tinyLogo}
            source={{ uri: item.ownerAvatarUrl }}
          />

          <View>
            <Text style={styles.text} fontWeight='bold'>
              {item.fullName}
            </Text>
            <Text style={styles.text} color='textSecondary'>
              {item.description}
            </Text>
            <Text style={styles.button}>{item.language}</Text>
          </View>
        </View>

        <View style={styles.bottomdiv}>
          <StatItem heading='Stars' value={item.stargazersCount} />
          <StatItem heading='Forks' value={item.forksCount} />
          <StatItem heading='Reviews' value={item.reviewCount} />
          <StatItem heading='Rating' value={item.ratingAverage} />
        </View>
        <View>{githuburl && <Button label='Open in GitHub' onPress={linkToGithub} />}</View>
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
