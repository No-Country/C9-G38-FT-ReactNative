import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Fonts from '../../../styles/theme/Fonts';
const CardItem = (props) => {
  const { username, avatar, intereses, id, navigation, user } = props;

  const interesesArray = intereses.join(' - ');

  const clickHandler = () => {
    // console.log(user);
    navigation.navigate('UserDetail', { id: id, user });
  };

  return (
    <TouchableWithoutFeedback onPress={clickHandler}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: avatar }} />
        <View style={styles.info}>
          <Text style={styles.user}>{username}</Text>
          <View style={styles.interestsWrapper}>
            {intereses.slice(0, 3).map((item) => (
              <Text style={styles.interestText}>{item}</Text>
            ))}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 6,
    marginTop: 12,
    alignItems: 'center',
    // borderWidth: 2,
    borderRadius: 18,
    backgroundColor: 'white',
    // borderColor: '#white',
  },
  info: {
    marginLeft: 10,
    flexDirection: 'column',
    flex: 1,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    // borderColor: "
  },
  user: {
    fontFamily: Fonts.type.bold,
  },
  interestsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestText: {
    fontFamily: Fonts.type.medium,
    fontSize: 12,
    marginRight: 2,
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 2,
  },
});

export default CardItem;
