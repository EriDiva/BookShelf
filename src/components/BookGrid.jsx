import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Heart } from "lucide-react-native";
import { useState } from "react";
import { colors } from "../../assets/theme";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { toggleFavoriteGlobal, favoriteIds } from "../data/favoriteStore";

// Import gambar lokal
import hp from "../../assets/images/harrypotter.jpg";
import hobbit from "../../assets/images/thehobbit.jpg";
import atomic from "../../assets/images/atomichabbits.jpg";
import richdad from "../../assets/images/richdad.jpg";
import laskar from "../../assets/images/laskar.jpg";
import bumi from "../../assets/images/bumi.png";
import dilan from "../../assets/images/dilan.jpg";
import alchemist from "../../assets/images/alchemist.jpeg";
import sapiens from "../../assets/images/sapiens.jpg";
import thinking from "../../assets/images/thinking.jpg";

import { books } from "../data/books";

// Komponen BookGrid menerima props search dari App.js
export default function BookGrid({ search, category }) {

  const navigation = useNavigation();
  
  // State untuk menyimpan ID buku yang difavoritkan
  const [favorites, setFavorites] = useState(favoriteIds);
  

  // Fungsi untuk menambah atau menghapus buku dari daftar favorit
  const toggleFavorite = (id) => {
    toggleFavoriteGlobal(id);
    setFavorites([...favoriteIds]);
  };

  // Filter buku berdasarkan input pencarian dari user
  const filteredBooks = books.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || book.genre === category;

    return matchSearch && matchCategory;
  });

  return (
<FlatList
  style={{ flexGrow: 100 }}
  data={filteredBooks}
  numColumns={2}
  keyExtractor={(item) => item.id.toString()}
  showsVerticalScrollIndicator={false}
  columnWrapperStyle={{
    justifyContent: "space-between",
    marginBottom: 10,
  }}
  contentContainerStyle={{
    paddingTop: 0,
  }}
  renderItem={({ item }) => {
    const isFav = favorites.includes(item.id);

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detail", { item: item })}
      >
        <Image style={styles.image} source={item.image} />

        <TouchableOpacity
          style={styles.icon}
          onPress={() => toggleFavorite(item.id)}
        >
          <Heart
            size={18}
            color={isFav ? "red" : "gray"}
            fill={isFav ? "red" : "none"}
          />
        </TouchableOpacity>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.info}>
          {item.year} • {item.genre}
        </Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
        <Text style={styles.desc} numberOfLines={2}>
          {item.desc}
        </Text>
      </TouchableOpacity>
    );
  }}
/>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    gap: 10,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 140,
    borderRadius: 12,
  },

  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },

  author: {
    fontSize: 12,
    color: colors.grey(),
    textAlign: "center",
  },

  info: {
    fontSize: 11,
    color: colors.grey(),
    textAlign: "center",
  },

  rating: {
    fontSize: 12,
    color: "#f39c12",
    textAlign: "center",
  },

  desc: {
    fontSize: 11,
    color: colors.grey(),
    textAlign: "center",
    marginTop: 4,
  },

  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
    width: "100%",
    color: "gray",
  },
});