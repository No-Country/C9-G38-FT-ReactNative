import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import Fonts from "../theme/Fonts";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  title: {
    color: colors.green,
    fontSize: Fonts.size.xxLarge,
    fontFamily: Fonts.type.sixCaps,
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
  },
  logos: {
    flexDirection: "row",
    margin: 10,
  },
  h2: {
    fontSize: 14,
    color: colors.darkBlue,
    fontWeight: "500",
    marginBottom: 4,
  },
  input: {
    height: 48,
    backgroundColor: colors.white,
    paddingLeft: 20,
    paddingVertical: 10,
    borderRadius: 12,
    borderColor: colors.green,
    borderWidth: 2,
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
  },
  formWrapper: {
    width: 280,
  },
  headerWrapper: {
    marginTop: 80,
    marginBottom: 50,
    // marginVertical: 30,
  },
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 40,
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    color: colors.darkBlue,
    fontSize: 16,
  },
});
