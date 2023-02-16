import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import Fonts from '../styles/theme/Fonts';
import CSButton from '../common/ui/Button';
import { BASE_ENDPOINT } from '../constants/endpoints';
import { useAuthStore } from '../store/authStore';

const UserDetail = ({ route }) => {
  const authToken = useAuthStore((state) => state.authToken);

  //   const user = route.params.user;
  const [user, setUser] = useState(route.params.user);

  const getUser = async () => {
    try {
      let req = await fetch(`${BASE_ENDPOINT}/users/${route.params.id}`, {
        method: 'GET',
        headers: { Authorization: authToken },
      });
      let res = await req.json();
      console.log(res);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const follow = async () => {
    try {
      let req = await fetch(`${BASE_ENDPOINT}/follows`, {
        method: 'POST',
        headers: {
          Authorization: authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ follow: route.params.id }),
      });
      let res = await req.json();
      console.log(res);
      setUser({ ...user, isFollower: true });
    } catch (error) {
      console.log(error);
    }
  };

  const unfollow = async () => {
    try {
      let req = await fetch(`${BASE_ENDPOINT}/follows/${route.params.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authToken,
          'Content-Type': 'application/json',
        },
      });
      let res = await req.json();
      console.log(res);
      setUser({ ...user, isFollower: false });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userDetails}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: user.picture, // 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg',
            }}
          />
        </View>
        <View style={styles.userContacts}>
          <Text style={styles.userName}>{user?.username}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.follows}>
              <Text style={styles.quantity}>20</Text>
              <Text>Seguidores</Text>
            </View>
            <View style={styles.follows}>
              <Text style={styles.quantity}>30</Text>
              <Text>Siguiendo</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.biographyContainer}>
        <Text style={styles.biography}>{user.about}</Text>
        <View style={styles.interestsWrapper}>
          {user.tags.slice(0, 3).map((item) => (
            <Text style={styles.interestText}>{item}</Text>
          ))}
        </View>
      </View>
      <View style={styles.actionButtons}>
        {user?.isFollower ? (
          <>
            <CSButton
              label={'Dejar de seguir'}
              style={styles.followButton}
              onPress={unfollow}
            />
            <CSButton
              label={'Contactar'}
              onPress={() => Linking.openURL('https://wa.me/')}
              style={styles.contactButton}
            />
          </>
        ) : (
          <CSButton
            label={'Seguir'}
            style={styles.followButton}
            onPress={follow}
          />
        )}
      </View>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  userDetails: {
    height: '18%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  profileImageContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '90%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  userContacts: {
    width: '70%',
    paddingLeft: 10,
    paddingTop: 2,
    justifyContent: 'center',
    marginTop: 10,
  },
  userName: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.xxxLarge,
    marginLeft: 10,
  },
  follows: {
    marginTop: 10,
    marginRight: 20,
    alignItems: 'center',
  },
  quantity: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.xxxLarge,
  },
  biographyContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
  },
  actionButtons: {
    marginTop: 20,
    flexDirection: 'row',
    height: '10%',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  followButton: {
    width: '49%',
  },
  contactButton: {
    width: '49%',
    backgroundColor: '#dedede',
  },
  biography: {
    fontFamily: Fonts.type.medium,
  },
  interestsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestText: {
    fontFamily: Fonts.type.bold,
    fontSize: 18,
    marginRight: 12,
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 14,
    marginBottom: 2,
  },
});
