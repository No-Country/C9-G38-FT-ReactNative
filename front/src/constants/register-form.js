const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const PASSWORD_REGEX =
    /^(?=(?:[^a-z]*[a-z]){2})(?=(?:[^0-9]*[0-9]){2})(?=.*[!-\/:-@\[-`{-~]).{8,}$/i

export const inputs = [
    {
        name: 'fullname',
        placeholder: 'Nombre completo',
        rules: {
            required: 'El nombre completo es requerido',
            minLength: {
                value: 8,
                message: 'El nombre completo debe tener al menos 8 caracteres',
            },
        },
    },
    {
        name: 'username',
        placeholder: 'Nombre de usuario',
        rules: {
            required: 'El nombre de usuario es requerido',
        },
    },
    {
        name: 'email',
        placeholder: 'Correo electronico',
        rules: {
            required: 'El correo electronico es requerido',
            validate: input => {
                return EMAIL_REGEX.test(input) || 'El correo es inválido'
            },
        },
    },
    {
        name: 'password',
        placeholder: 'Contraseña',
        secure: true,
        rules: {
            required: 'La contraseña requerido',
            validate: input => {
                return (
                    PASSWORD_REGEX.test(input) ||
                    'La contraseña debe tener mínimo ocho caracteres, al menos una letra, un número y un cáracter especial'
                )
            },
        },
    },
    {
        name: 'repeatPassword',
        placeholder: 'Repetir contraseña',
        secure: true,
        pwdValidate: true,
        rules: {
            required: 'Debe validar la contraseña ingresada',
            validate: (value, { password }) => {
                return value === password || 'Las contraseñas no coinciden'
            },
        },
    },
]
