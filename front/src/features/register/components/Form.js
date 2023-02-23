import { InputForm } from "./InputForm";
import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../../../styles/register/register.style";
import { inputs } from "../helpers/register-form";
import { REGISTER_USER } from "../../../constants/endpoints";
import { useNavigation } from "@react-navigation/native";
import CSButton from "../../../common/ui/Button";
import useFetch from "../../../hooks/useFetch";
import URL from "../../../constants/endpoints";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const connect = useFetch();

  const navigation = useNavigation();

  const onSubmit = async (newUser) => {
    try {
      await connect({ url: URL.REGISTER, data: newUser });

      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        {/* <Text style={styles.logo}>Logo Aplicacion o Imagen ilustrativa</Text> */}
        <Text style={styles.title}>Registrate!</Text>
      </View>
      {/* <View style={styles.logos}>
                <Text>LOGO Google</Text>
                <Text>LOGO Facebook</Text>
                <Text>LOGO Twitter</Text>
            </View> */}
      {/* <Text style={styles.h2}>O, puede registrarse con email...</Text> */}
      <View style={styles.formWrapper}>
        {inputs.map((input) => (
          <View key={input.name}>
            <Text style={styles.inputTitle} key={input.title}>
              {input.title}
            </Text>
            <InputForm
              name={input.name}
              placeholder={input.placeholder}
              control={control}
              styles={styles.input}
              rules={input.rules}
              secure={input.secure}
              pwdValidate={input.pwdValidate}
            />
            <Text style={{ color: "red", margin: 3 }}>
              {errors[input.name]?.message}
            </Text>
          </View>
        ))}
        <View
          style={{
            marginTop: 40,
          }}
        >
          <CSButton onPress={handleSubmit(onSubmit)} label="Registrarse" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;
