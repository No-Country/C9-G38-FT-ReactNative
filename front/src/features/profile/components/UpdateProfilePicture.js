import React, { useState } from "react";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UpdateProfilePicture() {
  const [image, setImage] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
  );

  const pickImage = async () => {
    // No es necesario pedir permisos para abrir la galería
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={pickImage}>
        {image && <Image source={{ uri: image }} style={styles.profileImage} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    height: 128,
    aspectRatio: 1,
    borderRadius: 140 / 2,
  },
});
