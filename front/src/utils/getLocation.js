import * as Location from 'expo-location';

export const getCurrentLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    setErrorMsg('Permisos a la localización denegados');
  }
  let location = await Location.getCurrentPositionAsync({
    enableHighAccuracy: true,
  });

  console.log(location);
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
};
