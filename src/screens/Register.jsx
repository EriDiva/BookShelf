import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { Eye, EyeOff } from "lucide-react-native";

import { colors } from "../../assets/theme";

export default function Register() {

  const navigation = useNavigation();

  // State form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Show hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Disable tombol
  const [isDisabled, setIsDisabled] = useState(true);

  // Validasi input
  useEffect(() => {

    if (
      fullName.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim()
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

  }, [fullName, email, password, confirmPassword]);

  // Fungsi register
  const handleRegister = () => {

    // Password tidak cocok
    if (password !== confirmPassword) {

      Alert.alert(
        "Error",
        "Password dan konfirmasi password tidak sama"
      );

      return;
    }

    // Minimal password
    if (password.length < 8) {

      Alert.alert(
        "Error",
        "Password minimal 8 karakter"
      );

      return;
    }

    Alert.alert(
      "Berhasil",
      "Akun berhasil dibuat"
    );

    navigation.navigate("Login");

  };

  return (

    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View>

        <Text style={styles.title}>
          Register
        </Text>

        <Text style={styles.subtitle}>
          Buat akun baru BookShelf
        </Text>

      </View>

      {/* Form */}
      <View style={styles.form}>

        {/* Nama */}
        <View>

          <Text style={styles.label}>
            Nama Lengkap
          </Text>

          <TextInput
            placeholder="Masukkan nama lengkap"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
          />

        </View>

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

        {/* Confirm Password */}
        <View>

          <Text style={styles.label}>
            Konfirmasi Password
          </Text>

          <View style={styles.passwordContainer}>

            <TextInput
              placeholder="Masukkan ulang password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirm}
              style={styles.passwordInput}
            />

            <TouchableOpacity
              onPress={() =>
                setShowConfirm(!showConfirm)
              }
            >

              {showConfirm ? (
                <EyeOff size={20} color="gray" />
              ) : (
                <Eye size={20} color="gray" />
              )}

            </TouchableOpacity>

          </View>

        </View>

      </View>

      {/* Tombol Register */}
      <View>

        <TouchableOpacity
          style={[
            styles.button,
            {
              opacity: isDisabled ? 0.5 : 1,
            },
          ]}
          disabled={isDisabled}
          onPress={handleRegister}
        >

          <Text style={styles.buttonText}>
            REGISTER
          </Text>

        </TouchableOpacity>

        {/* Pindah Login */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Login")
          }
        >

          <Text style={styles.loginText}>
            Sudah punya akun? Login
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

  loginText: {
    marginTop: 20,
    textAlign: "center",
    color: "#4CAF50",
    fontFamily: "Pjs-SemiBold",
  },

});