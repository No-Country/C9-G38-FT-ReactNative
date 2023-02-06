import { useController } from 'react-hook-form'
import { TextInput } from 'react-native'

export function InputForm({
    name,
    control,
    styles,
    placeholder,
    rules,
    secure = false,
    pwdValidate = false,
}) {
    const { field } = useController({
        name,
        control,
        defaultValue: '',
        rules,
    })

    return (
        <TextInput
            value={field.value}
            onChangeText={field.onChange}
            style={styles}
            placeholder={placeholder}
            secureTextEntry={secure}
            pwdValidate={pwdValidate}
        />
    )
}
