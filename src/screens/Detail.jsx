import React, { useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../assets/theme";

export default function Detail({ route }) {

  // Ambil data buku
  const { item } = route.params;

  // Animated Value
  const scrollY = useRef(new Animated.Value(0)).current;

  // Animasi Header
  const diffClampY = Animated.diffClamp(scrollY, 0, 80);

  const headerY = diffClampY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: headerY }] },
        ]}
      >
        <Text style={styles.headerTitle}>Detail Buku</Text>
      </Animated.View>

      {/* Scroll Animated */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          paddingTop: 50,
          paddingBottom: 20,
        }}
      >

        {/* Cover Buku */}
        <Image
          source={item.image}
          style={styles.image}
        />

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.info}>👤 {item.author}</Text>
          <Text style={styles.info}>📅 {item.year}</Text>

          <View style={styles.genreBox}>
            <Text style={styles.genre}>{item.genre}</Text>
          </View>

          <Text style={styles.rating}>⭐ {item.rating} / 5.0</Text>

          <Text style={styles.sectionTitle}>📖 Sinopsis</Text>

          <Text style={styles.desc}>
            {item.fullDesc || item.desc}
          </Text>
        </View>

      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  header: {
    position: "absolute",
    top: 35,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    borderRadius: 10,
    marginHorizontal: 2,
  },

  headerTitle: {
    color: "white",
    fontSize: 22,
    fontFamily: "Pjs-Bold",
  },

  image: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

card: {
  marginTop: -25,
  backgroundColor: colors.white(),
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  padding: 22,
},

  title: {
    fontSize: 24,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
    marginBottom: 14,
  },

  info: {
    fontSize: 14,
    color: colors.grey(),
    marginBottom: 5,
  },

  genreBox: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 5,
  },

  genre: {
    color: "white",
    fontSize: 12,
  },

  rating: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },

  sectionTitle: {
    marginTop: 15,
    fontSize: 16,
    fontFamily: "Pjs-Bold",
  },

  desc: {
    marginTop: 10,
    fontSize: 15,
    color: colors.grey(),
    lineHeight: 28,
    textAlign: "justify",
    letterSpacing: 0.2,
  },
});