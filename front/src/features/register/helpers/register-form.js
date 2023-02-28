import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from "../../../utils/validations";

export const inputs = [
  {
    title: "Nombre completo",
    name: "fullname",
    placeholder: "Ej: John Doe",
    rules: {
      required: "El nombre completo es requerido",
      minLength: {
        value: 8,
        message: "El nombre completo debe tener al menos 8 caracteres",
      },
    },
  },
  {
    title: "Nombre de usuario",
    name: "Ej: username",
    placeholder: "usuario1",
    rules: {
      required: "El nombre de usuario es requerido",
    },
  },
  {
    title: "Número de teléfono",
    name: "phone",
    placeholder: "ej: +541122334455",
    rules: {
      required: "Un número de teléfono es requerido",
      validate: (input) => {
        return PHONE_REGEX.test(input) || "El teléfono no es válido";
      },
    },
  },
  {
    title: "Correo electrónico",
    name: "email",
    placeholder: "ejemplo@email.com",
    rules: {
      required: "El correo electronico es requerido",
      validate: (input) => {
        return EMAIL_REGEX.test(input) || "El correo es inválido";
      },
    },
  },
  {
    title: "Contraseña",
    name: "password",
    placeholder: "Ej: contraseña123",
    secure: true,
    rules: {
      required: "La contraseña requerido",
      validate: (input) => {
        return (
          PASSWORD_REGEX.test(input) ||
          "La contraseña debe tener mínimo ocho caracteres, al menos una letra, un número y un cáracter especial"
        );
      },
    },
  },
  {
    title: "Repetir contraseña",
    name: "repeatPassword",
    placeholder: "Ej: contraseña123",
    secure: true,
    pwdValidate: true,
    rules: {
      required: "Debe validar la contraseña ingresada",
      validate: (value, { password }) => {
        return value === password || "Las contraseñas no coinciden";
      },
    },
  },
];
