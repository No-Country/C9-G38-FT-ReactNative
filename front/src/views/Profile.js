import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {Map} from "../features/profile/components";


const Profile = ({navigation, route}) => {

  const {someText} = route.params

  return (
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
  );
};

export default Profile;
