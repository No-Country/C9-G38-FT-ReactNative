import React, { useState } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAuthStore } from '../../../store/authStore';
import { BASE_URL } from '../../../constants/endpoints';

export default function UpdateProfilePicture({ avatar }) {
  const authToken = useAuthStore((state) => state.authToken);
  const [image, setImage] = useState(avatar);

  const pickImage = async () => {
    // No es necesario pedir permisos para abrir la galería
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const formData = new FormData();

      formData.append('file', {
        name: new Date() + '_profile',
        uri: result.assets[0].uri,
        type: 'image/jpg',
      });

      fetch(`${BASE_URL}users/update-avatar`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: authToken,
        },
        body: formData,
      });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        {image && <Image source={{ uri: image }} style={styles.profileImage} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    height: 120,
    aspectRatio: 1,
    borderRadius: 140 / 2,
  },
});
