import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Fonts from '../styles/theme/Fonts';
import CSButton from '../common/ui/Button';
import { useAuthStore } from '../store/authStore';
import { data } from '../constants/data';

const UpdateProfile = () => {
  const authToken = useAuthStore((state) => state.authToken);
  const [myProfile, setMyProfile] = useState();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      interest: '',
      password: '',
      age: '',
      gender: '',
      phone: '',
    },
  });

  const getMyProfile = async () => {
    let req = await fetch(
      'https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/auth/me',
      {
        method: 'GET',
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

  const onSubmit = () => {
    console.log('hello world');
  };

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.profileImage}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg',
        }}
      />
      <Text style={styles.userName}>Usernccame</Text> */}
      <Text style={styles.subtitle}>Email:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            disableFullscreenUI={true}
          />
        )}
      />
      <Text style={styles.subtitle}>Teléfono:</Text>
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
      <Text style={styles.subtitle}>Edad:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name="edad"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Edad"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            disableFullscreenUI={true}
          />
        )}
      />
      <Text style={styles.subtitle}>Sexo:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        name="edad"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Edad"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            disableFullscreenUI={true}
          />
        )}
      />
      <Text style={styles.subtitle}>Intereses:</Text>
      <View style={styles.interest}>
        {data[0].tags.map((item) => (
          <Pressable style={styles.item}>
            <Text style={styles.textItem}>{item}</Text>
          </Pressable>
        ))}
      </View>
      <CSButton onPress={handleSubmit(onSubmit)} label="Guardar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingTop: 20,
  },
  profileImage: {
    height: 140,
    aspectRatio: 1,
    borderRadius: 140 / 2,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#f8f8f8',
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 14,
    borderRadius: 12,
    fontSize: 15,
    fontFamily: Fonts.type.regular,
  },
  userName: {
    textAlign: 'center',
    fontSize: Fonts.size.xxxLarge,
    fontFamily: Fonts.type.bold,
    letterSpacing: 0.8,
  },
  subtitle: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.semiBold,
    color: 'gray',
  },
  interest: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#2192FF',
    marginLeft: 6,
    marginTop: 6,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  textItem: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.medium,
    color: 'white',
  },
});

export default UpdateProfile;
