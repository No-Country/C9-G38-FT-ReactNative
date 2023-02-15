import React from "react";
import Fonts from "../styles/theme/Fonts";
import OptionsList from "../features/profile/components/OptionsList";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../store/authStore";
import { useEffect, useState } from "react";
import Icon from "../utils/icons";
import { Icons } from "../utils/icons";
import { FontAwesome } from "@expo/vector-icons";
import UpdateProfilePicture from "../features/profile/components/UpdateProfilePicture";

const Profile = ({ navigation, screenName, route }) => {
  const authToken = useAuthStore((state) => state.authToken);

  const [myProfile, setMyProfile] = useState();
  const [optionsList, setOptionsList] = useState(false);

  const getMyProfile = async () => {
    let req = await fetch(
      "https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/auth/me",
      {
        method: "GET",
        headers: { Authorization: authToken },
      }
    );
    let res = await req.json();
    console.log(res.data);
    setMyProfile(res.data);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrapper}>
        <Pressable
          onPress={() =>
            navigation.navigate("Preferences", {
              fromProfile: true,
            })
          }
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome name="gear" size={30} color={"black"} />
        </Pressable>
      </View>
      {/* 
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.options}
          onPress={() => setOptionsList(true)}
        >
          <Icon name="more-vert" type={Icons.MaterialIcons} size={32} />
        </TouchableOpacity>
      </View> */}
      {/* {optionsList && (
        <OptionsList setOptionsList={() => setOptionsList(false)} />
      )} */}
      <View style={styles.profile}>
        <UpdateProfilePicture />
        {myProfile && <UpdateProfilePicture />}
        <View style={styles.editWrapper}>
          <Pressable
            onPress={() => navigation.navigate("UpdateProfile")}
            style={styles.editButton}
          >
            <FontAwesome name="pencil" size={18} color={"white"} />
          </Pressable>
        </View>
      </View>
      <Text style={styles.userName}>
        {myProfile ? myProfile.fullname : "..."}
      </Text>
      <View style={styles.details}>
        <View>
          <Text style={styles.number}>56</Text>
          <Text style={styles.text}>Seguidores</Text>
        </View>
        <View>
          <Text style={styles.number}>215</Text>
          <Text style={styles.text}>Siguiendo</Text>
        </View>
        {/* <View>
          <Text style={styles.number}>200</Text>
          <Text>Detail 3</Text>
        </View> */}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button1}>
          <Text>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("Map")}
        >
          <Text>Map</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  headWrapper: {
    marginVertical: 20,
    marginHorizontal: 16,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  header: {
    height: "6%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  options: {
    marginLeft: "auto",
  },
  profile: {
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    height: 148,
    aspectRatio: 1,
    borderRadius: 140 / 2,
  },
  userName: {
    textAlign: "center",
    // fontSize: 32,
    // fontWeight: 'bold',
    fontSize: Fonts.size.xxxLarge,
    fontFamily: Fonts.type.bold,
    letterSpacing: 0.8,
    marginTop: 10,
  },
  details: {
    marginTop: 10,
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 32,
  },
  number: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: Fonts.type.semiBold,
    marginBottom: 0,
    paddingBottom: 0,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: Fonts.type.semiBold,
  },
  buttons: {
    height: "6%",
    flexDirection: "row",
    paddingHorizontal: 32,
    marginTop: 24,
    justifyContent: "space-between",
  },
  logout: {
    flexDirection: "row",
    paddingHorizontal: 32,
    marginTop: 24,
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#dedede",
    width: "49%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  button2: {
    width: "49%",
    borderColor: "#ededed",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  editWrapper: {
    position: "absolute",
    bottom: -10,
  },
  editButton: {
    backgroundColor: "#637aff",
    borderRadius: 100,
    padding: 8,
    paddingHorizontal: 10,
  },
});

/*
<View>
      <Text>{JSON.stringify(someText)}</Text>
     
      <Map/>

      <TouchableOpacity onPress={
        ()=> navigation.goBack()}>
        <Text>VOLVER</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={
        ()=> navigation.navigate("Map",{...route.params})}>
        <Text>VER UBICACIÓN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={
        ()=> navigation.navigate("Profile",{...route.params})}>
        <Text>PROFILE(con .navigate)</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.push("Profile",{...route.params})}>
        <Text>PROFILE(con .push)</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <Text>IR HOME</Text>
      </TouchableOpacity>
    
    </View>
*/
