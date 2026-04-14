import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../assets/theme";

export default function Detail() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Cover Buku */}
        <Image
          source={require("../../assets/images/harrypotter.jpg")}
          style={styles.image}
        />

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Harry Potter</Text>

          {/* Info */}
          <Text style={styles.info}>👤 J.K. Rowling</Text>
          <Text style={styles.info}>📅 1997</Text>

          {/* Genre Badge */}
          <View style={styles.genreBox}>
            <Text style={styles.genre}>Fantasy</Text>
          </View>

          {/* Rating */}
          <Text style={styles.rating}>⭐ 4.9 / 5.0</Text>

          {/* Sinopsis */}
          <Text style={styles.sectionTitle}>📖 Sinopsis</Text>

          <Text style={styles.desc}>
            Harry Potter adalah seorang anak yatim piatu yang hidup bersama
            keluarga pamannya yang tidak menyukainya. Hidupnya berubah ketika
            ia menerima surat misterius yang membawanya ke Hogwarts, sekolah
            sihir terkenal.

            {"\n\n"}
            Di sana, Harry menemukan jati dirinya sebagai penyihir dan mulai
            menjalani petualangan penuh keajaiban, persahabatan, dan bahaya.
            Ia bertemu dengan teman-teman setia seperti Hermione dan Ron,
            serta menghadapi musuh besar yang mengancam dunia sihir.

            {"\n\n"}
            Kisah ini bukan hanya tentang sihir, tetapi juga tentang keberanian,
            persahabatan, dan perjuangan melawan kegelapan.
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