import React from 'react';
import Fonts from '../styles/theme/Fonts';
import CSButton from '../common/ui/Button';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../store/authStore';
import { useEffect, useState } from 'react';
import Icon from '../utils/icons';
import { Icons } from '../utils/icons';

const Profile = ({ navigation, route }) => {
  const logout = () => useAuthStore((state) => state.logout);
  const authToken = useAuthStore((state) => state.authToken);

  const [myProfile, setMyProfile] = useState();

  const getMyProfile = async () => {
    let req = await fetch('https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/auth/me', {
      method: 'GET',
      headers: { 'Authorization': authToken }
    });
    let res = await req.json();
    console.log(res.data);
    setMyProfile(res.data);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.options}>
          <Icon name='more-horiz' type={Icons.MaterialIcons} size={36} />
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        {myProfile ?
          <Image
            style={styles.profileImage}
            source={{
              uri: myProfile.avatar ?? 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg'
            }}
          /> :
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg'
            }}
          />
        }
      </View>
      <Text style={styles.userName}>{myProfile ? myProfile.fullname : '...'}</Text>
      <View style={styles.details}>
        <View>
          <Text style={styles.number}>56</Text>
          <Text>Detail 1</Text>
        </View>
        <View>
          <Text style={styles.number}>215</Text>
          <Text>Detail 2</Text>
        </View>
        <View>
          <Text style={styles.number}>200</Text>
          <Text>Detail 3</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button1}>
          <Text>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Map')}
        >
          <Text>Map</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logout}>
        <CSButton onPress={logout()} label="Cerrar sesion" />

        {/* <TouchableOpacity style={styles.button1}>
          <Text>Cerrar sesion</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    height: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    flexDirection: 'row',
  },
  options: {
    marginLeft: 'auto'
  },
  profile: {
    height: '22%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: 140,
    aspectRatio: 1,
    borderRadius: 140 / 2,
  },
  userName: {
    textAlign: 'center',
    // fontSize: 32,
    // fontWeight: 'bold',
    fontSize: Fonts.size.xxxLarge,
    fontFamily: Fonts.type.bold,
    letterSpacing: 0.8,
  },
  details: {
    marginTop: 10,
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 32,
  },
  number: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  buttons: {
    height: '6%',
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginTop: 24,
    justifyContent: 'space-between',
  },
  logout: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginTop: 24,
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#dedede',
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  button2: {
    width: '49%',
    borderColor: '#ededed',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
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
