import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import ThemedLink from "@/presentation/theme/components/ThemedLink";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import React from "react";
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from "react-native";


const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, "background");

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={{ paddingHorizontal: 40, backgroundColor: backgroundColor }}>
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <ThemedText style={{  paddingTop: 10 }} type="title">Crear cuenta</ThemedText>
          <ThemedText style={{ color: "grey" }}>
            Por favor crea una cuenta
          </ThemedText>
        </View>
     
        <View style={{ marginTop: 20 }}>
          {/* inputs email and password */}
           <ThemedTextInput
            placeholder="Nombre Completo"
            autoCapitalize="words"
            icon="person-outline"
          />
          <ThemedTextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
          />
          <ThemedTextInput
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
          />
          {/* final inputs email and password */}
          {/* Spacer */}
          <View style={{ marginVertical: 10 }} />
          {/* Button ingresar */}
          <ThemedButton icon="arrow-forward-outline">Registrar</ThemedButton>
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
            <ThemedText>Ya tienes Cuenta?</ThemedText>

            {/* ThemedLink */}
            <ThemedLink href="/auth/login" style={{ marginHorizontal: 5 }}>
              Login
            </ThemedLink>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
