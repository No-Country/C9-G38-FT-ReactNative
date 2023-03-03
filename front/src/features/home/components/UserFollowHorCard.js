import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Fonts from '../../../styles/theme/Fonts';
const UserFollowHorCard = ({ item }) => {
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
    margin: 0,
    padding: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.small,
    marginTop: 4,
  },
  picture: {
    width: 100,
    height: 90,
    borderRadius: 28,
  },
});
export default UserFollowHorCard;
