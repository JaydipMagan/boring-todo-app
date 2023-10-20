import { Screen } from "../components/templates";
import { View } from "@gluestack-ui/themed";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInputField, Button } from "@components";
import { Text } from "@rneui/themed";
import auth from "@react-native-firebase/auth";

type IRegisterFormData = {
  name: string;
  email: string;
  password: string;
};

type UserProfile = {
  name: string;
  email: string;
};

// const createUserProfile = async (user: any, userProfile: UserProfile) => {
//   try {
//     await db.ref(`users/${user.uid}`).set({
//       name: userProfile.name,
//       email: userProfile.email,
//     });
//     console.log("User profile created successfully!");
//   } catch (error) {
//     console.error("Error creating user profile:", error);
//   }
// };

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: IRegisterFormData) => {
    console.log("data", data);

    try {
      const { email, password } = data;

      auth()
        .createUserWithEmailAndPassword(
          "jane.doe@example.com",
          "SuperSecretPassword!"
        )
        .then(() => {
          console.log("User account created & signed in!");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }

          console.error(error);
        });

      const userCredential = await auth();
      // const user = userCredential.user;
      // if (user) {
      //   console.log("User registered successfully!");
      //   const profile: UserProfile = {
      //     name: data.name,
      //     email: data.email,
      //   };
      //   // await createUserProfile(user, profile);
      // }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <Screen>
      <View width={"80%"}>
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
              placeholder="Name"
            />
          )}
          name="name"
        />
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

        <Button onPress={handleSubmit(onSubmit)}>
          <Text>Register</Text>
        </Button>
      </View>
    </Screen>
  );
}
