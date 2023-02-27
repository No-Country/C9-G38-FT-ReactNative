import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../features/home/components/HomeHeader";
import ActivitiesList from "../features/home/components/ActivitiesList";
import UserActivitiesList from "../features/home/components/UserActivitiesList";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const Feed = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper}>
          <HomeHeader />
          {/* <ActivitiesList /> */}
          <UserActivitiesList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 14,
  },
});

export default Feed;
