import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Heart } from "lucide-react-native";
import { useState } from "react";
import { colors } from "../../assets/theme";

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

// Data buku
const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    rating: 4.9,
    desc: "Kisah penyihir muda melawan kekuatan jahat.",
    image: hp,
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    rating: 4.8,
    desc: "Petualangan Bilbo Baggins mencari harta karun.",
    image: hobbit,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    genre: "Self Development",
    rating: 4.8,
    desc: "Perubahan kecil berdampak besar.",
    image: atomic,
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: 1997,
    genre: "Finance",
    rating: 4.7,
    desc: "Belajar mengelola keuangan.",
    image: richdad,
  },
  {
    id: 5,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    year: 2005,
    genre: "Drama",
    rating: 4.7,
    desc: "Kisah perjuangan anak Belitung.",
    image: laskar,
  },
  {
    id: 6,
    title: "Bumi",
    author: "Tere Liye",
    year: 2014,
    genre: "Fantasy",
    rating: 4.6,
    desc: "Petualangan dunia paralel.",
    image: bumi,
  },
  {
    id: 7,
    title: "Dilan 1990",
    author: "Pidi Baiq",
    year: 2014,
    genre: "Romance",
    rating: 4.5,
    desc: "Kisah cinta remaja.",
    image: dilan,
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Philosophy",
    rating: 4.7,
    desc: "Perjalanan mencari mimpi.",
    image: alchemist,
  },
  {
    id: 9,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: 2011,
    genre: "History",
    rating: 4.6,
    desc: "Sejarah manusia.",
    image: sapiens,
  },
  {
    id: 10,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2011,
    genre: "Psychology",
    rating: 4.6,
    desc: "Cara kerja pikiran.",
    image: thinking,
  },
];

// Komponen BookGrid menerima props search dari App.js
export default function BookGrid({ search }) {
  
  // State untuk menyimpan ID buku yang difavoritkan
  const [favorites, setFavorites] = useState([]);

  // Fungsi untuk menambah atau menghapus buku dari daftar favorit
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter buku berdasarkan input pencarian dari user
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        {/* Menampilkan daftar buku berdasarkan hasil filter */}
        {filteredBooks.map((book) => {
          const isFav = favorites.includes(book.id);

          return (
            <TouchableOpacity key={book.id} style={styles.card} activeOpacity={0.8}>
              
              {/* Gambar buku */}
              <Image style={styles.image} source={book.image} />

              {/* Tombol favorit */}
              <TouchableOpacity
                style={styles.icon}
                onPress={() => toggleFavorite(book.id)}
              >
                <Heart
                  size={18}
                  color={isFav ? "red" : "gray"}
                  fill={isFav ? "red" : "none"}
                />
              </TouchableOpacity>

              {/* Judul buku */}
              <Text style={styles.title}>{book.title}</Text>

              {/* Penulis */}
              <Text style={styles.author}>{book.author}</Text>

              {/* Tahun & genre */}
              <Text style={styles.info}>
                {book.year} • {book.genre}
              </Text>

              {/* Rating */}
              <Text style={styles.rating}>⭐ {book.rating}</Text>

              {/* Deskripsi */}
              <Text style={styles.desc} numberOfLines={2}>
                {book.desc}
              </Text>

            </TouchableOpacity>
          );
        })}

        {/* Menampilkan pesan jika tidak ada buku yang ditemukan */}
        {filteredBooks.length === 0 && (
          <Text style={styles.empty}>Buku tidak ditemukan 😢</Text>
        )}

      </View>
    </ScrollView>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 15,
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