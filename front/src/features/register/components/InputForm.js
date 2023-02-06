import { useController } from 'react-hook-form'
import { TextInput } from 'react-native'

export function InputForm({ name, control, styles, placeholder }) {
    const { field } = useController({
        name,
        control,
        defaultValue: '',
    })

    return (
        <TextInput
            value={field.value}
            onChangeText={field.onChange}
            style={styles}
            placeholder={placeholder}
        />
    )
}
