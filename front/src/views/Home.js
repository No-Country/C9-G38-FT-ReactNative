import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { tabsArr } from '../utils/tabsHomeNavigator'
import Icon from '../utils/icons'
import Colors from '../constants/colors'

const Tab = createMaterialBottomTabNavigator()

function Home() {
    return (
        <Tab.Navigator
            initialRouteName={tabsArr[0].label}
            activeColor={Colors.darkOverlayColor2}
            barStyle={{ backgroundColor: Colors.purpleAlpha }}
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
                                    size={size}
                                    color={color}
                                />
                            )
                        },
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}

export default Home
