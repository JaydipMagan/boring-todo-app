import { Screen } from "../templates";
import { View, Button } from "@gluestack-ui/themed";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextInputField from "../atoms/input-field/input-field";

type ILoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // handle login logic using firebase
    console.log(data);
  };

  return (
    <Screen>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={{ width: 100 }}
              placeholder="Email"
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputField
              type="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
            />
          )}
          name="password"
        />

        <Button onPress={handleSubmit(onSubmit)} />
      </View>
    </Screen>
  );
}
