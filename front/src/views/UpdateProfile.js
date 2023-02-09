import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Fonts from "../styles/theme/Fonts";
import CSButton from "../common/ui/Button";

import React from "react";

const UpdateProfile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      interest: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = () => {
    console.log("hello world");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{
          uri: "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg",
        }}
      />
      <Text style={styles.userName}>Username</Text>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Intereses"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="interest"
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="phone"
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Repetir contraseña"
            secureTextEntry={true}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="password"
      />
      <CSButton onPress={handleSubmit(onSubmit)} label="Guardar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 32,
  },
  profileImage: {
    height: 140,
    aspectRatio: 1,
    borderRadius: 140 / 2,
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#f8f8f8",
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 12,
    fontSize: 15,
    fontFamily: Fonts.type.regular,
  },
  userName: {
    textAlign: "center",
    fontSize: Fonts.size.xxxLarge,
    fontFamily: Fonts.type.bold,
    letterSpacing: 0.8,
  },
});

export default UpdateProfile;
