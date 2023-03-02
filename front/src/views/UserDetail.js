import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import Fonts from '../styles/theme/Fonts';
import CSButton from '../common/ui/Button';
import { BASE_URL } from '../constants/endpoints';
import { useAuthStore } from '../store/authStore';
import colors from '../constants/colors';

const UserDetail = ({ route }) => {
  const authToken = useAuthStore((state) => state.authToken);

  //   const user = route.params.user;
  const [user, setUser] = useState();
  const getUser = async () => {
    try {
      let req = await fetch(`${BASE_URL}users/${route.params.id}`, {
        method: 'GET',
        headers: { Authorization: authToken },
      });
      let res = await req.json();
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const follow = async () => {
    try {
      let req = await fetch(`${BASE_URL}follows`, {
        method: 'POST',
        headers: {
          Authorization: authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ follow: route.params.id }),
      });
      let res = await req.json();
      setUser({ ...user, isFollower: true });
    } catch (error) {
      console.log(error);
    }
  };

  const unfollow = async () => {
    try {
      let req = await fetch(`${BASE_URL}follows/${route.params.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authToken,
          'Content-Type': 'application/json',
        },
      });
      let res = await req.json();
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
              uri: user?.avatar, // 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg',
            }}
          />
        </View>
        <View style={styles.userContacts}>
          <Text style={styles.userName}>{user?.username}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.follows}>
              <Text style={styles.quantity}>{user?.countFollowers || 0}</Text>
              <Text>Seguidores</Text>
            </View>
            <View style={styles.follows}>
              <Text style={styles.quantity}>{user?.countFollowing || 0}</Text>
              <Text>Siguiendo</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.biographyContainer}>
        <Text style={styles.biography}>{user?.biography}</Text>
        <View style={styles.interestsWrapper}>
          {user?.sports.map((item) => (
            <Text key={item.id} style={styles.interestText}>
              {item.name}
            </Text>
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
              onPress={() => Linking.openURL(`https://wa.me/${user.phone}`)}
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
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  follows: {
    marginTop: 10,
    marginRight: 20,
    alignItems: 'center',
  },
  quantity: {
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
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
    backgroundColor: colors.white,
    borderColor: colors.green,
    borderWidth: 2
  },
  biography: {
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
  },
  interestsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: colors.green,
    borderWidth: 2
  },
  interestText: {
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
    marginRight: 12,
    backgroundColor: colors.white,
    color: colors.darkBlue,
    paddingHorizontal: 10,
    borderRadius: 14,
    marginBottom: 2,
  },
});
