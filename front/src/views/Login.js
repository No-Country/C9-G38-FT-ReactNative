import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form';

function Login() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            userName: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = async data => {
        console.log(data)
        try {
            const req = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const res = await req.json();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Text>Iniciar sesión</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder='Nombre' style={styles.input} onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
                name='userName'
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder='Email' style={styles.input} onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
                name='email'
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.input} onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
                name='password'
            />
            <Button title='Enviar' onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#ededed',
        paddingLeft: 20,
        paddingRight: 150,
        paddingVertical: 10,
        marginBottom: 10
    }
});

export default Login;