import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../assets/theme";

export default function Detail({ route }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Cover Buku */}
        <Image
          source={item.image}
          style={styles.image}
        />

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>

          {/* Info */}
          <Text style={styles.info}>👤 {item.author}</Text>
          <Text style={styles.info}>📅 {item.year}</Text>

          {/* Genre Badge */}
          <View style={styles.genreBox}>
            <Text style={styles.genre}>{item.genre}</Text>
          </View>

          {/* Rating */}
          <Text style={styles.rating}>⭐ {item.rating} / 5.0</Text>

          {/* Sinopsis */}
          <Text style={styles.sectionTitle}>📖 Sinopsis</Text>

          <Text style={styles.desc}>
            {item.fullDesc || item.desc}
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  image: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  card: {
    marginTop: -20,
    backgroundColor: colors.white(),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
    marginBottom: 10,
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
    marginTop: 8,
    fontSize: 13,
    color: colors.grey(),
    lineHeight: 20,
    textAlign: "justify",
    letterSpacing: 0.3,
  },
});