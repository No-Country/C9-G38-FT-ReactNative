import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Pressable } from 'react-native';
import { useFilterStore } from '../store/filterStore';
import { styles } from '../styles/register/register.style';
import Filters from './Filters';
import { useAuthStore } from '../store/authStore';

const Preference = ({ navigation, route }) => {
  const { fromProfile } = route.params;
  const [selectInterest, setSelectInterest] = useState(false);

  const logout = () => useAuthStore((state) => state.logout);

  const { categories, gender, agesrange } = useFilterStore((state) => ({
    categories: state.categories,
    gender: state.gender,
    agesrange: state.agesrange,
  }));

  const filtersHandler = ({ navigation }) => {
    setSelectInterest(!selectInterest);
  };

  return (
    <View style={styles.container}>
      <View>
        {/* <Text>{categories}</Text> */}

      </View>

      <Filters
        navigation={navigation}
        selectInterest={selectInterest}
        setSelectInterest={setSelectInterest}
      />

    
        {fromProfile && (

          <Pressable style={styles.button} onPress={logout()}>
            <Text style={styles.text}>Cerrar Sesión</Text>
          </Pressable>
        )}




    </View>
  );
};


// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderWidth: 2,
//     borderColor: colors.green,
//     borderRadius: 4,

//     backgroundColor: colors.white,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: colors.darkBlue,

//   },
// });



export default Preference;
