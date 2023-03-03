import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { tabsArr } from '../utils/tabsHomeNavigator';
import Icon from '../utils/icons';
import Colors from '../constants/colors';

const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName={tabsArr[0].label}
      activeColor={Colors.darkOverlayColor2}
      barStyle={{
        backgroundColor: 'white',
        paddingTop: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderLeftWidth: 0.1,
        borderRightWidth: 0.1,
        position: 'absolute',
        overflow: 'hidden',
        height: 76,
      }}
      labeled={false}
    >
      {tabsArr.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.label}
          component={screen.component}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  name={screen.icon}
                  type={screen.type}
                  size={26}
                  color={color}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default Home;
