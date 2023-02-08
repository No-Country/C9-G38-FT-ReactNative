import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '../features/home/components/HomeHeader';
import ActivitiesList from '../features/home/components/ActivitiesList';
import UserActivitiesList from '../features/home/components/UserActivitiesList';
import { SafeAreaView } from 'react-native-safe-area-context';

const Feed = () => {
  return (
    <View style={styles.wrapper}>
      <HomeHeader />
      {/* <ActivitiesList /> */}
      <UserActivitiesList />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 14,
  },
});

export default Feed;
