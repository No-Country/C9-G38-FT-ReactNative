import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

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
    <View>
      <Text>Mí perfil</Text>
      <Text>*Avatar*</Text>

      <Text>"Nombre de usuario"</Text>
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

      <Button title="Guardar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#C4C4C4",
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 32,
    borderRadius: 10,
  },
});

export default UpdateProfile;
