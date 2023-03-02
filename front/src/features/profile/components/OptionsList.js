import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../constants/colors";
import Fonts from "../../../styles/theme/Fonts";
import { useAuthStore } from "../../../store/authStore";

const OptionsList = ({ setOptionsList }) => {
  const navigation = useNavigation();
  const logout = () => useAuthStore((state) => state.logout);

  return (
    <TouchableOpacity onPress={() => setOptionsList()} style={styles.container}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("UpdateProfile")}
        >
          <Text style={styles.text}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("UserPreferences")}
        >
          <Text style={styles.text}>Preferencias</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout()} style={styles.option}>
          <Text style={styles.text}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default OptionsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "none",
    position: "absolute",
    width: "100%",
    height: "100%",
    right: 0,
    top: 32,
    zIndex: 2,
  },

  optionsContainer: {
    backgroundColor: "#fff",
    width: "50%",
    marginLeft: "auto",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  option: {
    width: "100%",
    paddingVertical: 10,
    borderColor: colors.green,
    borderWidth: 2,
  },
  text: {
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    fontSize: Fonts.size.normal,

    color: colors.darkBlue
  }
});
