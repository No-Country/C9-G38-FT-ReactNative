import React, { useCallback, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { useFilterStore } from "../../../store/filterStore";




const FilterAge = () => {
  const [age, setAge] = useState("");
  const { setAges } = useFilterStore();

  const ageHandler = (text) => {
    setAge(text);
    setAges(parseInt(text));
  };






  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecciona tu edad</Text>
    
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={age}
        onChangeText={(text) => ageHandler(text)}
      />
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 30,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    width: "80%",
  },
};

export default FilterAge;
