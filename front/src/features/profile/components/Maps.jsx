import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, Text } from 'react-native';
import * as Location from 'expo-location';

const Map = ({ navigation, route }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.1833,
    longitude: 67.3667,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const markerOne = {
    latitude: -34.60649025310167,
    longitude: -58.466175773826365,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markerTwo = {
    latitude: -34.60859550343435,
    longitude: -58.46831239595712,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permisos a la localización denegados');
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    console.log(location);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker
          coordinate={mapRegion}
          title="(¿nombre de usuario?) 🙋‍♂️"
        ></Marker>

        <Marker coordinate={markerOne} title="Cancha tenis">
          <View
            style={{ backgroundColor: 'white', padding: 5, borderRadius: 10 }}
          >
            <Text style={{ color: 'white' }}>🎾</Text>
          </View>
        </Marker>

        <Marker coordinate={markerTwo} title="Cancha fútbol 5">
          <View
            style={{ backgroundColor: 'white', padding: 5, borderRadius: 10 }}
          >
            <Text style={{ color: 'white' }}>⚽</Text>
          </View>
        </Marker>
      </MapView>

      <Button title="REFRESH GEO" color="#f194ff" onPress={userLocation} />

      <Button
        title="VOLVER A PERFIL"
        onPress={() => navigation.navigate('Profile', { ...route.params })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    minHeight: '90%',

    width: '100%',
    height: '90%',
  },
});

export default Map;
