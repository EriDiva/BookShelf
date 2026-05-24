import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Eye, EyeOff } from "lucide-react-native";
import { colors } from "../../assets/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../libs/supabase";

export default function Login() {

  const navigation = useNavigation();

  // State input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State show hide password
  const [showPassword, setShowPassword] = useState(false);

  // State tombol login
  const [isDisabled, setIsDisabled] = useState(true);

  // State loading
  const [loading, setLoading] = useState(false);

  // Validasi input
  useEffect(() => {

    if (email.trim() && password.trim()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

  }, [email, password]);

  // Fungsi login
  const handleLogin = async () => {
    setLoading(true);

    try {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        if (
          error.message ===
          "Invalid login credentials"
        ) {
          Alert.alert(
            "Error",
            "Email atau Password salah"
          );
        }

        setLoading(false);
        return;
      }

      const currentTime = new Date().getTime();

      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({
          token: data.session.access_token,
          expires:
            currentTime +
            data.session.expires_in * 1000,
        })
      );

      setLoading(false);

      navigation.replace("Main");
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Error",
        error.message
      );

      setLoading(false);
    }
  };

  return (

    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View>

        <Text style={styles.title}>
          Login
        </Text>

        <Text style={styles.subtitle}>
          Masuk ke aplikasi BookShelf
        </Text>

      </View>

      {/* Form */}
      <View style={styles.form}>

        {/* Email */}
        <View>

          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            placeholder="Masukkan email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />

        </View>

        {/* Password */}
        <View>

          <Text style={styles.label}>
            Password
          </Text>

          <View style={styles.passwordContainer}>

            <TextInput
              placeholder="Masukkan password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />

            <TouchableOpacity
              onPress={() =>
                setShowPassword(!showPassword)
              }
            >

              {showPassword ? (
                <EyeOff size={20} color="gray" />
              ) : (
                <Eye size={20} color="gray" />
              )}

            </TouchableOpacity>

          </View>

        </View>

      </View>

      {/* Tombol Login */}
      <View>

        <TouchableOpacity
          style={[
            styles.button,
            {
              opacity: isDisabled ? 0.5 : 1,
            },
          ]}
          disabled={isDisabled}
          onPress={handleLogin}
        >

          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>
              LOGIN
            </Text>
          )}

        </TouchableOpacity>

        {/* Pindah Register */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Register")
          }
        >

          <Text style={styles.registerText}>
            Belum punya akun? Register
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white(),
    padding: 24,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 32,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },

  form: {
    gap: 20,
  },

  label: {
    marginBottom: 8,
    fontFamily: "Pjs-SemiBold",
    color: colors.black(),
  },

  input: {
    backgroundColor: colors.grey(0.1),
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontFamily: "Pjs-Regular",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey(0.1),
    borderRadius: 12,
    paddingHorizontal: 15,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontFamily: "Pjs-Regular",
  },

  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Pjs-Bold",
  },

  registerText: {
    marginTop: 20,
    textAlign: "center",
    color: "#4CAF50",
    fontFamily: "Pjs-SemiBold",
  },

});