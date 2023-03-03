import { View, Text, StyleSheet, FlatList } from 'react-native';
import { data } from '../../../constants/data';
import UserFollowCard from './UserFollowCard';
import { useUserStore } from '../../../store/userStore';
import { useEffect } from 'react';
import Fonts from '../../../styles/theme/Fonts';
import colors from '../../../constants/colors'



const UserActivitiesList = () => {

  const { users, setUsers } = useUserStore((state) => state);
  const {getAllUsers} = useUserStore()

  const getUsers = async () => {
    setLoadingUsers(true);

    getAllUsers()


    // const data = {
    //   minAge: 20,
    //   maxAge: 40,
    //   ratio: 14,
    //   // sports: categories.map((item) => {
    //   //   return {
    //   //     id: item,
    //   //   };
    //   // }),
    // };

    // const resp = await connect({ url: URL.SEARCH_USERS, data });
    // console.log({resp});
    // setUsers(resp);
    // setLoadingUsers(false);
    
  };


  useEffect(() => {
    getAllUsers()
      getUsers();
    
      
    
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.subtitle}>Seguidores</Text>
      <FlatList
        horizontal={true}
        data={users}
        renderItem={({ item }) => <UserFollowCard key={item.id} item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  subtitle: {
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    fontSize: Fonts.size.xxLarge,
    color: colors.darkBlue,
    marginBottom: 24,
  },
});
export default UserActivitiesList;
