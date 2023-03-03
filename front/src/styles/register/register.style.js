import { StyleSheet } from 'react-native';
import Fonts from '../theme/Fonts';
import colors from "../../constants/colors";
export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  title: {
    color: '#202020',
    fontSize: Fonts.size.xxxxLarge,
    fontFamily: Fonts.type.bold,
  },
  logo: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logos: {
    flexDirection: 'row',
    margin: 10,
  },
  h2: {
    fontSize: 14,
    color: '#5b5463',
    fontWeight: '500',
    marginBottom: 4,
  },
  inputTitle: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.semiBold,
    color: 'gray',
  },
  input: {
    height: 48,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 15,
    fontFamily: Fonts.type.regular,
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderWidth: 2,
    borderColor: colors.darkRed,
    borderRadius: 4,
  
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.darkBlue,
    
  },
});
