import React, { useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { colors } from "../../assets/theme";

export default function SplashScreen() {

  const navigation = useNavigation();

  // Pindah otomatis ke Login
  useEffect(() => {

    setTimeout(() => {

      navigation.replace("Login");

    }, 2000);

  }, []);

  return (

    <View style={styles.container}>

      {/* Logo aplikasi */}
      <Text style={styles.logo}>
        📚 BookShelf
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Aplikasi Katalog Buku
      </Text>
      
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white(),
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 40,
    fontFamily: "Pjs-Bold",
    color: "#4CAF50",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },

  footer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
  },

  footerText: {
    fontSize: 12,
    color: colors.grey(),
    fontFamily: "Pjs-Regular",
  },

});