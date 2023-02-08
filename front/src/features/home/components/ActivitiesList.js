import { View, Text, StyleSheet } from 'react-native';

const ActivitiesList = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: 'lightblue',
      }}
    >
      <Text>List of Activities</Text>
      <Text>Ejemplos:</Text>
      <Text>*LINK* IMAGEN: Crear, Unirse a Eventos</Text>
      <Text>*LINK* IMAGEN: Creacion de Equipo</Text>
      <Text>*LINK* IMAGEN: Otra Seccion</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ActivitiesList;
