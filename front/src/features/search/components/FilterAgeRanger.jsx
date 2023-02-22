import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useFilterStore } from '../../../store/filterStore';

const RangeSlider = () => {
  const [ageRange, setAgeRange] = useState([0, 100]);

  const { setAgesRanges } = useFilterStore();

  const handleSliderChange = (values) => {
    setAgeRange(values);
    setAgesRanges(ageRange);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecciona un rango de edad:</Text>
      <View style={styles.sliderContainer}>
        <MultiSlider
          values={[ageRange[0], ageRange[1]]}
          sliderLength={300}
          onValuesChange={handleSliderChange}
          min={18}
          max={90}
          step={1}
          allowOverlap={false}
          snapped
          markerStyle={styles.markerStyle}
          trackStyle={styles.trackStyle}
          selectedStyle={styles.selectedStyle}
          unselectedStyle={styles.unselectedStyle}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.ageLabel}>{ageRange[0]}</Text>
          <Text style={styles.ageLabel}>{ageRange[1]}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  sliderContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 16,

    marginBottom: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  ageLabel: {
    fontSize: 14,
  },
  markerStyle: {
    backgroundColor: '#007AFF',
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 10,
  },
  trackStyle: {
    height: 2,
    backgroundColor: '#b7b7b7',
  },
  selectedStyle: {
    backgroundColor: '#007AFF',
  },
  unselectedStyle: {
    backgroundColor: '#b7b7b7',
  },
});

export default RangeSlider;
