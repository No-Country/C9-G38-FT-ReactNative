import { ButtonForm } from './ButtonForm'
import { InputForm } from './InputForm'
import { useForm } from 'react-hook-form'
import { ScrollView, Text, View } from 'react-native'
import { styles } from '../../../styles/register/register.style'
import { inputs } from '../../../constants/register-form'

export default () => {
    const { control, handleSubmit, errors } = useForm()

    const onSubmit = d => {
        try {
            console.log(d)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.logo}>
                    Logo Aplicacion o Imagen ilustrativa
                </Text>
                <Text style={styles.title}>Registrate a Netsports!</Text>
            </View>
            <View style={styles.logos}>
                <Text>LOGO Google</Text>
                <Text>LOGO Facebook</Text>
                <Text>LOGO Twitter</Text>
            </View>
            <View>
                <Text style={styles.h2}>O, puede registrarse con email...</Text>
                {inputs.map(input => (
                    <InputForm
                        key={input.name}
                        name={input.name}
                        placeholder={input.placeholder}
                        control={control}
                        styles={styles.input}
                    />
                ))}
                <ButtonForm onPressFunction={handleSubmit(onSubmit)} />
            </View>
        </ScrollView>
    )
}
