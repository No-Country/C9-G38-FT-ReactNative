import React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useUserStore } from "../../../store/userStore";
import colors from "../../../constants/colors";
import Fonts from "../../../styles/theme/Fonts";
import { FontAwesome } from "@expo/vector-icons";

const SearchbarComponent = () => {
  const { searchbarValue, filterSearchUser } = useUserStore((store) => store);

  return (
    <Searchbar
    onChangeText={filterSearchUser}
    value={searchbarValue}
    inputStyle={styles.input}
    style={styles.search}
    placeholder="Buscar"
    placeholderTextColor={colors.darkBlue}
      icon={() => (
        <FontAwesome name="search" size={24} color={colors.darkBlue} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'red',
    border: "none",
    elevation: 0,
    backgroundColor: colors.blue,
    backgroundColor: '#FBFBFB',
    borderColor: colors.green,
    borderWidth: 2,
    borderRadius: 50,
  },
  input: {
    color: colors.darkBlue,
    fontFamily: Fonts.type.bold,
    letterSpacing: 0.5,
  },
  linearGradient: {
    borderRadius: 50,
  }
});

export default SearchbarComponent;
