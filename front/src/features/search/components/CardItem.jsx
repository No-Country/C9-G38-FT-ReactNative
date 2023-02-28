import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Fonts from '../../../styles/theme/Fonts';
import colors from '../../../constants/colors';
import borderRadius from '../../../constants/borderRadius';

const CardItem = (props) => {
  const { id, navigation, user } = props;

  const clickHandler = () => {
    navigation.navigate('UserDetail', { id: id, user });
  };

  return (
    <TouchableWithoutFeedback onPress={clickHandler}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: user.avatar }} />
        <View style={styles.info}>
          <Text style={styles.user}>{user.username}</Text>
          <View style={styles.interestsWrapper}>
            {user.sports?.map((item) => (
              <Text key={item.id} style={styles.interestText}>
                {item.name}
              </Text>
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
    alignItems: 'center'
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
    color: colors.font
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
    backgroundColor: colors.primary,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: borderRadius,
    marginBottom: 2,
  },
});

export default CardItem;
