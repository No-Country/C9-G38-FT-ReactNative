import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
<<<<<<< HEAD
} from 'react-native';
import colors from '../../../constants/colors'
import Fonts from '../../../styles/theme/Fonts';
=======
  TouchableOpacity,
} from "react-native";
import Fonts from "../../../styles/theme/Fonts";
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
const CardItem = (props) => {
  const { id, navigation, user, buttons, acceptFollow, declineFollow, index } =
    props;

  const clickHandler = () => {
    navigation.navigate("UserDetail", { id: id, user });
  };

  return (
    <TouchableWithoutFeedback onPress={clickHandler}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: user.avatar }} />
        <View style={styles.info}>
          <Text style={styles.user}>{user.username}</Text>
          <View style={styles.interestsWrapper}>
            {user.sports?.map((item) => (
              <View key={item.id}>
                <Text style={styles.interestText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
          {buttons ? (
            <View style={styles.withbuttons}>
              <TouchableOpacity style={styles.buttonAccept} onPress={() => acceptFollow(index, id)}>
                <Text style={{color: "white"}}>Aceptar</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.buttonDecline} onPress={() => declineFollow(index, id)}>
                <Text style={{color: "#34353f"}}>Rechazar</Text>
              </TouchableOpacity>
            </View>
          ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 6,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 2,
    borderRadius: 18,
    backgroundColor: "white",
    
    // borderColor: '#white',
  },
  buttonAccept: {
    backgroundColor: '#7e86fa',
    fontFamily: Fonts.type.bold,
    width: '30%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 10,
    
  },
  buttonDecline: {
    backgroundColor: '#f1f1f1',
    width: '30%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  withbuttons: {
    flexDirection: "row",
  },
  info: {
    marginLeft: 10,
    flexDirection: "column",
    flex: 1,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.green
  },
  user: {
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    fontSize: Fonts.size.small
  },
  interestsWrapper: {
<<<<<<< HEAD
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: colors.green,
    borderWidth: 2
=======
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
  },
  interestText: {
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    fontSize: Fonts.size.small,
    marginRight: 2,
<<<<<<< HEAD
    backgroundColor: colors.white,
    color: colors.darkBlue,
=======
    backgroundColor: "gray",
    color: "white",
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 2,
  },
});

export default CardItem;
