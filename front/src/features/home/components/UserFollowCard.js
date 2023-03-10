import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Fonts from '../../../styles/theme/Fonts';
const UserFollowCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          console.log(item.id);
          navigation.navigate('UserDetail', { id: item?.id });
        }}
      >
        <Image source={{ uri: item.avatar }} style={styles.picture} />
        <Text style={styles.subtitle}>{item.username}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    margin: 4,
    padding: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.normal,
    marginTop: 4,
  },
  picture: {
    width: 130,
    height: 120,
    borderRadius: 28,
  },
});
export default UserFollowCard;
