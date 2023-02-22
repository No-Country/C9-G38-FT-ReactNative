import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Fonts from '../styles/theme/Fonts';
import CSButton from '../common/ui/Button';
import { useAuthStore } from '../store/authStore';
import { FilterCategories } from '../features/search/components/FilterCategories';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';

const UpdateProfile = () => {
  const authToken = useAuthStore((state) => state.authToken);
  const [myProfile, setMyProfile] = useState();
  const [selected, setSelected] = React.useState([]);
  const connect = useFetch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const getMyProfile = async () => {
    const resp = await connect({ url: URL.AUTH_ME });
    // setSelected(resp.sports.map((item) => item.id));
    setMyProfile(resp);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  const onSubmit = async (values) => {
    const sports = selected.map((item) => {
      return {
        id: item,
      };
    });
    const data = {
      ...values,
      sports,
    };
    await connect({ url: URL.UPDATE_PROFILE, data });
  };

  return (
    <View>
      <ScrollView style={styles.scrollView}>
        {myProfile && (
          <View style={styles.container}>
            <Text style={styles.subtitle}>Email:</Text>
            <Controller
              control={control}
              rules={{ required: false }}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={myProfile.email}
                  defaultValue={myProfile.email}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  editable={false}
                  value={value}
                  disableFullscreenUI={true}
                />
              )}
            />
            <Text style={styles.subtitle}>Nombre completo:</Text>
            <Controller
              control={control}
              rules={{ required: false }}
              name="fullname"
              defaultValue={myProfile?.fullname}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={myProfile.fullname}
                  defaultValue={myProfile.fullname}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  editable={false}
                  value={value}
                  disableFullscreenUI={true}
                />
              )}
            />
            <Text style={styles.subtitle}>Teléfono:</Text>
            <Controller
              control={control}
              rules={{ required: false }}
              name="phone"
              // defaultValue={myProfile?.phone}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={myProfile.phone ? myProfile.phone : 'Teléfono'}
                  defaultValue={myProfile.phone ? myProfile.phone : null}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Text style={styles.subtitle}>Edad:</Text>
            <Controller
              control={control}
              rules={{ required: false }}
              name="age"
              // defaultValue={myProfile?.age}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={myProfile.age ? myProfile.age : 'Edad'}
                  defaultValue={myProfile.age ? myProfile.age : null}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  disableFullscreenUI={true}
                />
              )}
            />
            {/* <Text style={styles.subtitle}>Sexo:</Text>
            <Controller
              control={control}
              rules={{ required: false }}
              name="gender"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder=""
                  defaultValue={myProfile.gender ? myProfile.gender : null}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  disableFullscreenUI={true}
                />
              )}
            /> */}
            <Text style={styles.subtitle}>Bio:</Text>
            <Controller
              control={control}
              rules={{ required: false }}
              name="biography"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Escribí algo sobre vos..."
                  defaultValue={
                    myProfile.biography ? myProfile.biography : null
                  }
                  onChangeText={onChange}
                  multiline={true}
                  numberOfLines={4}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Text style={styles.subtitle}>Intereses:</Text>
            <FilterCategories selected={selected} setSelected={setSelected} />
            <View style={styles.wrapperButton}>
              <CSButton onPress={handleSubmit(onSubmit)} label="Actualizar" />
            </View>
          </View>
        )}
      </ScrollView>
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
    minHeight: 48,
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
  scrollView: {
    backgroundColor: 'pink',
  },
  wrapperButton: {
    marginTop: 40,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default UpdateProfile;
