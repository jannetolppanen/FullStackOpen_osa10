import { View, Text } from 'react-native-web';

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>repository name: {item.fullName}</Text>
      <Text>description: {item.description}</Text>
    <Text>language: {item.language}</Text>
    <Text>stars: {item.stargazersCount}</Text>
    <Text>forks: {item.forksCount}</Text>
    <Text>reviews: {item.reviewCount}</Text>
    <Text>average rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
