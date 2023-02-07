import { View, Text, TextInput, StyleSheet, Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';

function Login({ navigation }) {
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

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const req = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);
      return navigation.navigate('Home');
    } catch (error) {
      console.log(error);
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
      <View style={styles.loginGoogle}>
        <Button title='Iniciar sesión con Google' />
      </View>
      <View style={styles.signUp}>
        <Text>¿No tenés cuenta?</Text>
        <Text onPress={() => navigation.navigate('Register')}>¡Creemos usa!</Text>
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
  }
});

export default Login;
