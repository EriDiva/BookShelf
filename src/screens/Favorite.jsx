import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View } from "react-native";
import { colors } from "../../assets/theme";
import { FlatList } from "react-native";
import { books } from "../data/books";
import { Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { favoriteIds } from "../data/favoriteStore";

export default function Favorite() {

  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const data = books.filter((book) =>
        favoriteIds.includes(book.id)
      );
      setFavoriteBooks(data);
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>❤️ Favorite Books</Text>

      <FlatList
        data={favoriteBooks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.title}</Text>
          </View>
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontFamily: "Pjs-Bold",
    marginBottom: 10,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    width: 60,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },

  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});