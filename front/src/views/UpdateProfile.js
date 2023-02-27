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
import FilterGender from '../features/search/components/Checkbox';




const UpdateProfile = ({ navigation }) => {
  const authToken = useAuthStore((state) => state.authToken);
  const [myProfile, setMyProfile] = useState();
  const [selected, setSelected] = React.useState([]);
const [updatedGender, setUpdatedGender] = useState(null)
  const connect = useFetch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const getMyProfile = async () => {
    const resp = await connect({ url: URL.AUTH_ME });
    resp.age = 25
    setValue('email', resp.email);
    setValue('fullname', resp.fullname);
    setValue('phone', resp.phone);
    setValue('age', resp.age.toString());
    setValue('biography', resp.biography);
    setValue('gender', resp.gender);
    setUpdatedGender(resp.gender)
    setMyProfile(resp);
  };




  useEffect(() => {
    getMyProfile();
    

  }, []);




  const onSubmit = async (values) => {
    const gender = updatedGender
    console.log({gender})

    const sports = selected.map((item) => {
      return {
        id: item,
      };
    });
    const data = {
      ...values,
      sports,
      gender
    };
    console.log(data)
    await connect({ url: URL.UPDATE_PROFILE, data });
    navigation.goBack(null);
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
                setUpdatedGender= {setUpdatedGender}
                updatedGender = {updatedGender}
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
  subtitle: {
    fontWeight: 'bold',
    marginVertical: 10,
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
