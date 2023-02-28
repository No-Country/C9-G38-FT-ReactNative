import React from 'react';
import Fonts from '../styles/theme/Fonts';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../store/authStore';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import UpdateProfilePicture from '../features/profile/components/UpdateProfilePicture';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';

const Profile = ({ navigation, screenName, route }) => {
  const [myProfile, setMyProfile] = useState();
  const [refresh, setRefresh] = useState(false);
  const connect = useFetch();
  const pullRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false), getMyProfile();
    }, 2000);
  };
  const getMyProfile = async () => {
    const resp = await connect({ url: URL.AUTH_ME });
    console.log(resp);
    setMyProfile(resp);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flexGrow: 0 }}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => pullRefresh()}
          />
        }
      >
        <View>
          <View style={styles.headWrapper}>
            <Text style={{ fontFamily: Fonts.type.bold, margin: 8 }}>
              @{myProfile?.username}
            </Text>
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
          <View
            style={{
              height: '16%',
              flexDirection: 'row',
              paddingHorizontal: 16,
              marginBottom: 50,
            }}
          >
            <View style={styles.profile}>
              {myProfile && <UpdateProfilePicture avatar={myProfile?.avatar} />}
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
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('FollowList', { title: 'Seguidores' })
                  }
                >
                  <Text style={styles.number}>{myProfile?.countFollowing}</Text>
                  <Text style={styles.text}>Seguidores</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('FollowList', { title: 'Siguiendo' })
                  }
                >
                  <Text style={styles.number}>{myProfile?.countFollowers}</Text>
                  <Text style={styles.text}>Siguiendo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.bio}>{myProfile?.biography}</Text>
          <Text style={styles.categories}>Seguidores</Text>

          <View
            style={{
              flexDirection: 'row',

              paddingHorizontal: 24,
              marginVertical: 10,
            }}
          >
            {myProfile?.followers?.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{ width: '25%', alignItems: 'center' }}
                onPress={() =>
                  navigation.navigate('UserDetail', { id: item.id })
                }
              >
                <Image
                  style={{ width: 80, borderRadius: 30, aspectRatio: 1 }}
                  source={{
                    uri: item.avatar,
                  }}
                />
                <Text style={styles.followUsername}>{item.username}</Text>
              </TouchableOpacity>
            ))}
            {myProfile?.followers.length !== 0 ? (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('FollowList', {
                    title: 'Seguidores',
                    id: myProfile.id,
                  })
                }
                style={{ justifyContent: 'flex-end' }}
              >
                <Text>ver más...</Text>
              </TouchableOpacity>
            ) : (
              <Text>Aun sin seguidores</Text>
            )}
          </View>
          <Text style={styles.categories}>Intereses</Text>
          <View style={styles.sportsContainer}>
            <ScrollView horizontal>
              {myProfile?.sports.map((sport) => (
                <View key={sport.id} style={styles.sport}>
                  <Text style={styles.sportName}>{sport.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.buttons}>
            {/* <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Map')}
        >
          <Text>Map</Text>
        </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
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
    alignItems: 'center',
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
    justifyContent: 'center',
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
    justifyContent: 'space-between',
  },
  number: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: Fonts.type.bold,
    marginBottom: -6,
    paddingBottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.type.bold,
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
    bottom: -20,
  },
  editButton: {
    backgroundColor: '#637aff',
    borderRadius: 100,
    padding: 8,
    paddingHorizontal: 10,
  },
  categories: {
    fontFamily: Fonts.type.bold,
    fontSize: 18,
    marginRight: 2,
    width: '100%',
    paddingLeft: 24,
    color: '#354259',

    marginBottom: 2,
  },
  bio: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: Fonts.type.regular,
  },
  sportsContainer: {
    paddingLeft: 16,
    height: 50,
    marginVertical: 6,
  },
  sport: {
    marginRight: 10,
    backgroundColor: '#40EE96',
    justifyContent: 'center',
    paddingHorizontal: 22,
    borderRadius: 15,
  },
  followUsername: {
    textAlign: 'left',
    fontFamily: Fonts.type.semiBold,
  },
  sportName: {
    fontFamily: Fonts.type.semiBold,
    color: 'white',
    fontSize: 16,
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
