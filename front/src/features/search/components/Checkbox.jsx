import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Fonts from '../../../styles/theme/Fonts';

const Checkbox = ({ label, selected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.checkbox}>
      {selected ? <View style={styles.checked} /> : null}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const FilterGender = ({ setUpdatedGender, updatedGender }) => {
  const [hombreSelected, setHombreSelected] = useState(false);
  const [mujerSelected, setMujerSelected] = useState(false);
  const [otroSelected, setOtroSelected] = useState(false);

  const handleHombrePress = () => {
    setOtroSelected(false);
    setMujerSelected(false);
    setHombreSelected(true);
    setUpdatedGender('hombre');
  };

  const handleMujerPress = () => {
    setHombreSelected(false);
    setOtroSelected(false);
    setMujerSelected(true);
    setUpdatedGender('mujer');
  };

  const handleOtroPress = () => {
    setHombreSelected(false);
    setMujerSelected(false);
    setOtroSelected(true);
    setUpdatedGender('otro');
  };

  return (
    <View style={styles.container}>
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checked: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000000',
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.type.regular,
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.type.bold,
    lineHeight: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  titleStyle: {
    fontFamily: Fonts.type.bold,
    fontSize: 18,
    marginRight: 2,
    width: '100%',
    color: '#354259',
    marginBottom: 2,
  },
};

export default FilterGender;
