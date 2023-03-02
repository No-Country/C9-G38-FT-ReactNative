import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Fonts from '../styles/theme/Fonts';
import CSButton from '../common/ui/Button';
import { useAuthStore } from '../store/authStore';
import { FilterCategories } from '../features/search/components/FilterCategories';
import CategoryPicker from '../features/updateProfile/components/CategoryPicker';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';
<<<<<<< HEAD
import colors from '../constants/colors';
=======
import FilterGender from '../features/search/components/Checkbox';
import { getCurrentLocation } from '../utils/getLocation';
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7

const UpdateProfile = ({ navigation, route }) => {
  const authToken = useAuthStore((state) => state.authToken);
  const isComplete = useAuthStore((state) => state.isComplete);
  const [myProfile, setMyProfile] = useState();
  const [selected, setSelected] = React.useState([]);
  const fromProfile = route.params?.fromProfile;
  const [updatedGender, setUpdatedGender] = useState(null);
  const setIsComplete = useAuthStore((state) => state.setIsComplete);

  const connect = useFetch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const getMyProfile = async () => {
    const resp = await connect({ url: URL.AUTH_ME });

    setValue('email', resp.email);
    setValue('fullname', resp.fullname);
    setValue('username', resp.username);
    setValue('phone', resp.phone);
    setValue('age', resp.age ? resp.age.toString() : '');
    setValue('biography', resp.biography);
    setValue('gender', resp.gender);
    setUpdatedGender(resp.gender);
    setMyProfile(resp);
  };

  const [location, setLocation] = useState({});

  useEffect(() => {
    getMyProfile();
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    const location = await getCurrentLocation();
    setLocation(location);
  };

  const onSubmit = async (values) => {
    const gender = updatedGender;
    const sports = myProfile.sports.map((item) => {
      return {
        id: item.id,
      };
    });

    const data = {
      ...values,
      sports,
      gender,
      location,
    };
    console.log(data);

    const response = await connect({ url: URL.UPDATE_PROFILE, data });
    console.log('@!!!!!!!!!!!@', response);

    if (fromProfile) {
      navigation.goBack(null);
      console.log(fromProfile);
    } else {
      setIsComplete(response.isComplete);
    }
    if (isComplete) {
      navigation.navigate('Home');
    }
  };

  return (
    <View>
      <ScrollView style={styles.scrollView}>
        {myProfile && (
          <View style={styles.container}>
            {!isComplete && (
              <Text style={styles.textComplete}>
                Para poder usar SportsApp debes tener completo tu perfil.
              </Text>
            )}

            <Text style={styles.subtitle}>Email:</Text>
            <Controller
              control={control}
              rules={{ required: false }}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Email"
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
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Nombre completo"
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
                  placeholder="Telefono"
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
            <Text style={styles.subtitle}>Género:</Text>
            <FilterGender
              setUpdatedGender={setUpdatedGender}
              updatedGender={updatedGender}
            />
            <Text style={styles.subtitle}>Bio:</Text>
            <Controller
              control={control}
              rules={{ required: false }}
              name="biography"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Escribí algo sobre vos..."
                  onChangeText={onChange}
                  multiline={true}
                  numberOfLines={4}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            <Text style={styles.subtitle}>Intereses:</Text>
            <CategoryPicker myProfile={myProfile} setMyProfile={setMyProfile} />
            {/*<FilterCategories selected={selected} setSelected={setSelected} />*/}
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
    backgroundColor: colors.white,
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 14,
    borderRadius: 12,
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
    color: colors.darkBlue
  },
  userName: {
    textAlign: 'center',
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
    color: colors.darkBlue,
    letterSpacing: 0.8,
  },
  subtitle: {
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    color: colors.darkBlues,
  },
  textComplete: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.semiBold,
    color: 'red',
    marginBottom: 10,
    marginTop: 10,
  },
  scrollView: {
    backgroundColor: colors.lightBlue,
  },
  wrapperButton: {
    marginTop: 40,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default UpdateProfile;
{
  /* <Text style={styles.subtitle}>Sexo:</Text>
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
            /> */
}
