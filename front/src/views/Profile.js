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
<<<<<<< HEAD
import colors from '../constants/colors'
=======
import { useUserStore } from '../store/userStore';
import {data} from "../constants/data"
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7

const Profile = ({ navigation, screenName, route }) => {
  const [myProfile, setMyProfile] = useState();
  const [refresh, setRefresh] = useState(false);
  const {followerUsers} = useUserStore((state) => state);
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
<<<<<<< HEAD
      <View style={styles.headWrapper}>
        <Text style={{ fontFamily: Fonts.type.raleway, color: colors.darkBlue }}>
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
          <FontAwesome name="gear" size={30} />
        </Pressable>
      </View>
      <View
        style={{
          height: '16%',
          flexDirection: 'row',
          paddingHorizontal: 16,
          marginBottom: 20,
        }}
=======
      <ScrollView
        style={{ flexGrow: 0 }}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => pullRefresh()}
          />
        }
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
      >





        <View>
          <View style={styles.headWrapper}>
            <Text style={{ fontFamily: Fonts.type.bold, margin: 8 }}>
              @{myProfile?.username}
            </Text>
            
            

            { data.length !== 0 ?
            // reemplazar data. length por followerUsers.length === 0 ?

            (<TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RequestFollowers')
                  }
                >
                  <Text style={{color: "white", fontWeight: "bold", backgroundColor: "red", padding: 2, borderRadius: 4}}>{data.length} solicitudes pendientes</Text>
                </TouchableOpacity>): null}
            
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
<<<<<<< HEAD
              <FontAwesome name="pencil" size={18} color={colors.darkBlue} />
=======
              <FontAwesome name="gear" size={30} color={'black'} />
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
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
<<<<<<< HEAD
            <Image
              style={{ width: 50, borderRadius: 100, aspectRatio: 1 }}
              source={{
                uri: item.avatar,
              }}
            />
            <Text>{item.username}</Text>
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
          <Text style={{color: colors.darkBlue}}>Aun sin seguidores</Text>
        )}
      </View>
      <Text style={styles.categories}>Intereses</Text>

      <View style={styles.buttons}>
        {/* <TouchableOpacity
=======
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
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
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
    // color: colors.darkBlue
  },
  profile: {
    width: '35%',
    height: '100%',
    alignItems: 'center',
  },
  userName: {
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    marginTop: 10,
    color: colors.darkBlue
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  number: {
    textAlign: 'center',
<<<<<<< HEAD
    color: colors.darkBlue,
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
    marginBottom: 0,
=======
    fontSize: 24,
    fontFamily: Fonts.type.bold,
    marginBottom: -6,
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
    paddingBottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
<<<<<<< HEAD
    color: colors.darkBlue,
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
=======
    fontFamily: Fonts.type.bold,
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
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
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    color: colors.white,
    borderColor: colors.green,
    borderWidth: 2,
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
  },
  button2: {
    width: '49%',
    borderColor: colors.green,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    color: colors.white,
    borderWidth: 2,
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
  },
  editWrapper: {
    position: 'absolute',
<<<<<<< HEAD
    bottom: -15,
=======
    bottom: -20,
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7
  },
  editButton: {
    backgroundColor: colors.white,
    borderRadius: 100,
    padding: 8,
    paddingHorizontal: 10,
    borderColor: colors.green,
    borderWidth: 2
  },
  categories: {
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
    marginRight: 2,
    width: '100%',
    paddingLeft: 24,
    color: colors.darkBlue,
    marginBottom: 2,
  },
  bio: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    color: colors.darkBlue
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
