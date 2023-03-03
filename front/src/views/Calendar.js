import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Calendar = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Calendar</Text>
        <Text>Proximos Eventos:</Text>
      </View>
    </SafeAreaView>
  );
};

export default Calendar;
