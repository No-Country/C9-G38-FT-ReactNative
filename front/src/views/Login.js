import { View, Text, TextInput, StyleSheet, Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { useAuthStore } from '../store/authStore';
import { useState } from 'react';

const Login = ({ navigation }) => {
  const [loginError, setLoginError] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
  });
  
  const setAuth = useAuthStore(state => state.setAuth);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const req = await fetch('https://c9-g38-ft-reactnative-production.up.railway.app/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (req.status === 400 || req.status === 401) throw new Error('not found');
      const res = await req.json();
      setAuth(res.token);
      setAuth('token12345');
    } catch (error) {
      console.log('1', error.message);
      setLoginError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24 }}>Bienvenido</Text>
      <Text style={{ fontSize: 80, marginBottom: 66 }}>App</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Nombre'
            style={[styles.input, errors.userName && styles.errorInput]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='userName'
      />
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Contraseña'
            secureTextEntry={true}
            style={[styles.input, errors.password && styles.errorInput]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='password'
      />
      <View style={styles.login}>
        <Button title='Iniciar sesión' onPress={handleSubmit(onSubmit)} />
      </View>
      {loginError &&
        <Text style={styles.loginError}>El email o la contraseña son incorrectos.</Text>
      }
      <View style={styles.loginGoogle}>
        <Button title='Iniciar sesión con Google' />
      </View>
      <View style={styles.signUp}>
        <Text>¿No tenés cuenta?</Text>
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('Register')}>¡Creemos usa!</Text>
      </View>
      <Text>Olvidé mi contraseña.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 72
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#C4C4C4',
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 32,
    borderRadius: 10
  },
  errorInput: {
    backgroundColor: '#f2dcdc',
  },
  login: {
    width: '100%'
  },
  loginGoogle: {
    width: '100%',
    marginTop: 60
  },
  signUp: {
    flexDirection: 'row',
    marginTop: 20
  },
  signUpLink: {
    color: '#618ec3',
    marginLeft: 10
  },
  loginError: {
    color: '#b48484',
    marginTop: 20,
    fontWeight: 'bold'
  }
});

export default Login;
