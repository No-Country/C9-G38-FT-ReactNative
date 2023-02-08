import { View, Text } from 'react-native'
import HomeHeader from '../features/home/components/HomeHeader'
import ActivitiesList from '../features/home/components/ActivitiesList'
import UserActivitiesList from '../features/home/components/UserActivitiesList'

const Feed = () => {
    return (
        <View>
            <HomeHeader />
            <ActivitiesList />
            <UserActivitiesList />
        </View>
    )
}

export default Feed
