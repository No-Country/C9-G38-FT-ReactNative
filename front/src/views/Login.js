import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form';

function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            userName: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = async data => {
        console.log(data);
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
        <View style={styles.container}>
            <Text>Iniciar sesión</Text>
            <Controller control={control} rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder='Nombre' style={[styles.input, errors.userName && styles.errorInput]} onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
                name='userName'
            />
            <Controller control={control} rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder='Email' style={[styles.input, errors.email && styles.errorInput]} onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
                name='email'
            />
            <Controller control={control} rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder='Contraseña' secureTextEntry={true} style={[styles.input, errors.password && styles.errorInput]} onChangeText={onChange} onBlur={onBlur} value={value} />
                )}
                name='password'
            />
            <Button title='Enviar' onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        alignItems: 'center'
    },
    input: {
        width: '90%',
        backgroundColor: '#ededed',
        paddingLeft: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    errorInput: {
        backgroundColor: '#f2dcdc'
    }
});

export default Login;