import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CardItem from '../features/search/components/CardItem';
import useFetch from '../hooks/useFetch';
import { useAuthStore } from '../store/authStore';
import { useUserStore } from '../store/userStore';
import { data } from '../constants/data';
import URL from '../constants/endpoints';

const RequestFollowers = ({ navigation }) => {
  const { followerUsers, setFollowerUsers } = useUserStore((state) => state);
  const [follower, setFollower] = useState(null);
  const { authToken } = useAuthStore((state) => state);

  const connect = useFetch();

  const getFollowUsers = async () => {
    // console.log(followerUsers)
    const resp = await connect({ url: URL.GET_FOLLOWS_REQUEST });
    console.log('!!!', resp);
    // setFollower(data)
    // setFollowerUsers(data)
    setFollowerUsers(resp);
    setUsers(resp);
  };

  useEffect(() => {
    getFollowUsers();
  }, []);
  //followerUsers

  const acceptFollow = async (index, id) => {
    console.log('@@@@@@@@@@@@@@@', id);

    const resp = await connect({ url: URL.APROVE_FOLLOW, extra: id });
    // const newArray = follower.splice(index, 1);
    // console.log(id);
    // setFollower(newArray);
  };
  const declineFollow = async (index, id) => {
    console.log('@@@@@@@@@@@@@@@', id);
    const resp = await connect({ url: URL.DECLINE_FOLLOW, extra: id });

    // const newArray = follower.splice(index, 1);
    // setFollower(newArray);
  };

  return (
    <View>
      <FlatList
        data={followerUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item: element, index }) => (
          <CardItem
            navigation={navigation}
            avatar={element.picture}
            username={element.username}
            intereses={element.sports}
            user={element}
            id={element.id}
            acceptFollow={acceptFollow}
            declineFollow={declineFollow}
            index={index}
            buttons
          />
        )}
      />
    </View>
  );
};

export default RequestFollowers;
