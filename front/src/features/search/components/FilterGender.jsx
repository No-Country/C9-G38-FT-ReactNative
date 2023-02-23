import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useFilterStore } from "../../../store/filterStore";
import Fonts from "../../../styles/theme/Fonts";

const Checkbox = ({ label, selected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.checkbox}>
      {selected ? <View style={styles.checked} /> : null}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const FilterGender = () => {
  const [hombreSelected, setHombreSelected] = useState(false);
  const [mujerSelected, setMujerSelected] = useState(false);
  const [otroSelected, setOtroSelected] = useState(false);
  const { setGender } = useFilterStore();

  const handleHombrePress = () => {
    setHombreSelected(true);
    setMujerSelected(false);
    setOtroSelected(false);
    setGender("hombre");
  };

  const handleMujerPress = () => {
    setHombreSelected(false);
    setMujerSelected(true);
    setOtroSelected(false);
    setGender("mujer");
  };

  const handleOtroPress = () => {
    setHombreSelected(false);
    setMujerSelected(false);
    setOtroSelected(true);
    setGender("otro");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>Seleccioná tu género</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          label="Hombre"
          selected={hombreSelected}
          onPress={handleHombrePress}
        />
        <Checkbox
          label="Mujer"
          selected={mujerSelected}
          onPress={handleMujerPress}
        />
        <Checkbox
          label="Otro"
          selected={otroSelected}
          onPress={handleOtroPress}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checked: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  label: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
  },

  titleStyle: {
    fontFamily: Fonts.type.bold,
    fontSize: 18,
    marginRight: 2,
    width: "100%",
    color: "#354259",
    marginBottom: 2,
  },
};

export default FilterGender;
