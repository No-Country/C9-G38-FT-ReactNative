import React from 'react';
import Fonts from '../styles/theme/Fonts';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../store/authStore';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Profile = ({ navigation, screenName, route }) => {
  const authToken = useAuthStore((state) => state.authToken);

  const [myProfile, setMyProfile] = useState();

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
    res.data.avatar = 'https://theawesomedaily.com/wp-content/uploads/2022/07/pfp1.jpeg'
    setMyProfile(res.data);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrapper}>
        <Text style={{ fontFamily: Fonts.type.bold }}>{myProfile?.username}</Text>
        <Pressable
          onPress={() =>
            navigation.navigate('Preferences', {
              fromProfile: true,
            })
          }
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome name="gear" size={30} color={'black'} />
        </Pressable>
      </View>
      <View style={{ height: '16%', flexDirection: 'row', paddingHorizontal: 16, marginBottom: 20 }}>
        <View style={styles.profile}>
          {myProfile ? (
            <Image
              style={styles.profileImage}
              source={{
                uri:
                  myProfile.avatar ??
                  'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg',
              }}
            />
          ) : (
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg',
              }}
            />
          )}
          <View style={styles.editWrapper}>
            <Pressable
              onPress={() => navigation.navigate('UpdateProfile')}
              style={styles.editButton}
            >
              <FontAwesome name="pencil" size={18} color={'white'} />
            </Pressable>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, width: '65%' }}>
          <Text style={styles.userName}>
            {myProfile ? myProfile.fullname : '...'}
          </Text>
          <View style={styles.details}>
            <TouchableOpacity onPress={() => navigation.navigate('FollowList', { title: 'Seguidores' })}>
              <Text style={styles.number}>56</Text>
              <Text style={styles.text}>Seguidores</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FollowList', { title: 'Siguiendo' })}>
              <Text style={styles.number}>215</Text>
              <Text style={styles.text}>Siguiendo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={{ paddingHorizontal: 16, paddingVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</Text>
      <Text style={{ paddingHorizontal: 24 }}>Seguidores</Text>
      <View style={{ flexDirection: 'row', paddingHorizontal: 16, marginVertical: 10 }}>
        {['user1', 'user2', 'user3', 'user4', 'user5'].map((follower) =>
          <TouchableOpacity key={follower} style={{ width: '16%', alignItems: 'center' }}>
            <Image
              style={{ width: 50, borderRadius: 100, aspectRatio: 1 }}
              source={{ uri: 'https://theawesomedaily.com/wp-content/uploads/2022/07/pfp1.jpeg' }} />
            <Text>{follower}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('FollowList', { title: 'Seguidores' })}
          style={{ justifyContent: 'flex-end' }}>
          <Text>ver más...</Text>
        </TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    height: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  profile: {
    width: '35%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    height: 128,
    aspectRatio: 1,
    borderRadius: 140 / 2,
  },
  userName: {
    fontSize: Fonts.size.xxxLarge,
    fontFamily: Fonts.type.bold,
    letterSpacing: 0.8,
    marginTop: 10,
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  number: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: Fonts.type.semiBold,
    marginBottom: 0,
    paddingBottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.type.semiBold,
  },
  buttons: {
    height: '6%',
    flexDirection: 'row',
    paddingHorizontal: 16,
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
  editWrapper: {
    position: 'absolute',
    bottom: -10,
  },
  editButton: {
    backgroundColor: '#637aff',
    borderRadius: 100,
    padding: 8,
    paddingHorizontal: 10,
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
