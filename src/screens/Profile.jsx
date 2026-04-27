import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../../assets/theme";
import { ProfileData } from "../data/profiledata";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={ProfileData.profilePict}
          style={styles.image}
        />

        <Text style={styles.name}>{ProfileData.name}</Text>
        <Text style={styles.info}>Member since {ProfileData.createdAt}</Text>
      </View>

      {/* Stats */}
      <View style={styles.card}>
        <View style={styles.statItem}>
          <Text style={styles.number}>{ProfileData.blogPosted}</Text>
          <Text style={styles.label}>Books</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.number}>{ProfileData.following}</Text>
          <Text style={styles.label}>Favorite</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.number}>{ProfileData.follower}</Text>
          <Text style={styles.label}>Category</Text>
        </View>
      </View>

      {/* About */}
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutText}>
          Aplikasi BookShelf untuk mengelola dan mencari buku favorit.
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  info: {
    fontSize: 14,
    color: colors.grey(),
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.white(),
    padding: 15,
    borderRadius: 15,
    elevation: 5,
    marginBottom: 20,
  },

  statItem: {
    alignItems: "center",
  },

  number: {
    fontSize: 18,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  label: {
    fontSize: 12,
    color: colors.grey(),
  },

  about: {
    marginBottom: 20,
  },

  aboutTitle: {
    fontSize: 16,
    fontFamily: "Pjs-Bold",
    marginBottom: 5,
  },

  aboutText: {
    fontSize: 13,
    color: colors.grey(),
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontFamily: "Pjs-Bold",
  },
});