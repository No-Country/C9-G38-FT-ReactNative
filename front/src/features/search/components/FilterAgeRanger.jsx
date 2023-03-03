import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useFilterStore } from '../../../store/filterStore';
import colors from '../../../constants/colors'
import Fonts from '../../../styles/theme/Fonts';

const RangeSlider = () => {
  const [ageRange, setAgeRange] = useState([0, 100]);

  const { setAgesRanges } = useFilterStore();

  const handleSliderChange = (values) => {
    setAgeRange(values);
    setAgesRanges(ageRange);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Seleccioná un rango de edad</Text>
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
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.smaill,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  markerStyle: {
    backgroundColor: colors.darkBlue,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor:  colors.darkBlue,
    borderRadius: 10,
  },
  trackStyle: {
    height: 2,
    backgroundColor: colors.darkBlue,
  },
  selectedStyle: {
    backgroundColor: colors.darkBlue,
  },
  unselectedStyle: {
    backgroundColor: colors.darkBlue,
  },
  titleStyle: {
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
    marginRight: 2,
    width: "100%",
    color: colors.darkBlue,
    marginBottom: 2,
  },
});

export default RangeSlider;
