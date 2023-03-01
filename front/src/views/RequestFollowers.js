import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CardItem from '../features/search/components/CardItem';
import useFetch from '../hooks/useFetch';
import { useAuthStore } from '../store/authStore';
import { useUserStore } from '../store/userStore';


const RequestFollowers = ({navigation}) => {

    const { followerUsers, setFollowerUsers } = useUserStore((state) => state);
    const [users, setUsers] = useState()

    const connect = useFetch();

    const geFollowtUsers = async () => {
        
    setFollowerUsers("hola")
    console.log(followerUsers)
        const resp = await connect({ url: URL.GET_FOLLOWERS});
        setFollowerUsers(resp);
        // setUsers(resp);
        
      };


      useEffect(() => {
        geFollowtUsers()
        
      }, [])
      
    

  return (
  
      <View>
        <FlatList
        data={followerUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item: element }) => (
     
          <CardItem
            navigation={navigation}
            avatar={element.avatar}
            username={element.username}
            intereses={element.sports}
            user={element}
            id={element.id}
          />
        )}
      />

        
      </View>
    
  );
};

export default RequestFollowers;