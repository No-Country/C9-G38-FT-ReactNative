import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { useAuthStore } from '../store/authStore';
import { useState } from 'react';
import Fonts from '../styles/theme/Fonts';
import CSButton from '../common/ui/Button';
import useFetch from '../hooks/useFetch';
import URL from '../constants/endpoints';
import useLoginGoogle from '../hooks/useLoginGoogle';
import IconGoogle from 'react-native-vector-icons/FontAwesome5';
<<<<<<< HEAD
import colors from '../constants/colors'
=======
import { useTogglePasswordVisibility } from '../hooks/useToggleVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';
>>>>>>> 83e5180d69e9f6dcb619dfa272a0a8256c9e3ff7

const Login = ({ navigation }) => {
  const [loginError, setLoginError] = useState(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  const { googleAuth } = useLoginGoogle();
  const connect = useFetch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const setAuth = useAuthStore((state) => state.setAuth);
  const setIsComplete = useAuthStore((state) => state.setIsComplete);

  const onSubmit = async (data) => {
    setLoginError(false);
    try {
      const response = await connect({ url: URL.LOGIN, data: data });
      const { token, user } = response;
      console.log('@@@', response);
      setAuth(token);
      setIsComplete(user.isComplete);
    } catch (error) {
      console.log('1', error.message);
      setLoginError(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sporteam App</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={[styles.input, errors.email && styles.errorInput]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Contraseña"
              underlineColorAndroid="rgba(0,0,0,0)"
              secureTextEntry={passwordVisibility}
              style={[styles.inputField, errors.password && styles.errorInput]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#232323"
              />
            </Pressable>
          </View>
        )}
        name="password"
      />
      <View style={styles.login}>
        <CSButton onPress={handleSubmit(onSubmit)} label="Iniciar sesión" />
        {/* <Button title="Iniciar sesión" onPress={handleSubmit(onSubmit)} /> */}
      </View>
      {loginError && (
        <Text style={styles.loginError}>
          El email o la contraseña son incorrectos.
        </Text>
      )}
      <View style={styles.loginGoogle}>
        <CSButton
          icon={
            <IconGoogle
              name="google"
              size={25}
              color= {colors.darkBlue}
              style={{ marginRight: 10 }}
            />
          }
          onPress={() => googleAuth()}
          label="Iniciar sesión con Google"
        />
      </View>
      <View style={styles.signUp}>
        <Text style={styles.bottomText}>¿No tenés cuenta?</Text>
        <Text
          style={styles.redirectText}
          onPress={() => navigation.navigate('Register')}
        >
          ¡Registrate!
        </Text>
      </View>
      <Text style={styles.bottomText}>Olvidé mi contraseña.</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 72,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 32,
    borderRadius: 12,
    borderColor: colors.green,
    borderWidth: 2,
    fontSize: 15,
    fontFamily: Fonts.type.regular,
  },
  errorInput: {
    // backgroundColor: colors.red,
  },
  login: {
    width: '100%',
    marginTop: 30,
  },
  loginGoogle: {
    width: '100%',
    marginTop: 60,
  },
  signUp: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: Fonts.size.xxxLarge,
    fontFamily: Fonts.type.sixCaps,
    color: colors.green,
    marginBottom: 20
  },
  redirectText: {
    fontFamily: Fonts.type.raleway,
    fontSize: Fonts.size.normal,
    fontWeight: 'bold',
    color: colors.green,
    marginLeft: 5,
  },
  bottomText: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.type.raleway,
    fontWeight: 'bold',
    color: colors.darkBlue
  },
  loginError: {
    color: colors.darkBlue,
    marginTop: 20,
    fontWeight: 'bold',
  },
  inputField: {
    padding: 12,
    textDecorationStyle: 'none',
    fontSize: 15,
    paddingLeft: 25,
    width: '90%',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 12,

    fontFamily: Fonts.type.regular,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
});
export default Login;
