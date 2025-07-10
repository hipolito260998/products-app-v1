import { useThemeColor } from "@/hooks/useThemeColor";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import ThemedLink from "@/presentation/theme/components/ThemedLink";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";

const LoginScreen = () => {
  const { login } = useAuthStore();
  const { height } = useWindowDimensions();

  const backgroundColor = useThemeColor({}, "background");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isPosting, setIsPosting] = useState(false);

  const onLogin = async () => {
    const { email, password } = form;

    console.log({ email, password });

    if (email.length === 0 || password.length === 0) {
      Alert.alert("Error", "Por favor ingrese email y password");
      return;
    }
    setIsPosting(true);

    const wasSuccess = await login(email, password);
    setIsPosting(false);
    if (wasSuccess) {
      router.replace("/");
      return;
    }

    Alert.alert("Error", "Email o password incorrectos");
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          paddingHorizontal: 20,
          backgroundColor: backgroundColor,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <ThemedText type="title">Ingresar</ThemedText>
          <ThemedText style={{ color: "grey" }}>
            Por favor ingrese para continuar
          </ThemedText>
        </View>
        {/* Email and password */}
        <View style={{ marginTop: 20 }}>
          {/* inputs email and password */}
          <ThemedTextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <ThemedTextInput
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          {/* final inputs email and password */}
          {/* Spacer */}
          <View style={{ marginVertical: 10 }} />
          {/* Button ingresar */}
          <ThemedButton
            icon="arrow-forward-outline"
            onPress={onLogin}
            disabled={isPosting}
          >
            Ingresar
          </ThemedButton>
          {/* Spacer */}
          <View style={{ marginTop: 30 }} />
          {/* Enlace Registro */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThemedText>No tienes Cuenta?</ThemedText>

            {/* ThemedLink */}
            <ThemedLink href="/auth/register" style={{ marginHorizontal: 5 }}>
              Crear Cuenta
            </ThemedLink>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
