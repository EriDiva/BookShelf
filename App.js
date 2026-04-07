import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontType } from './assets/theme';
import { useFonts } from 'expo-font';
import { Search } from 'lucide-react-native';
import { useState } from 'react';
import BookGrid from './src/components/BookGrid';
import { CategoryList } from "./src/data/categories";
import { StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity, FlatList } from 'react-native';


// Komponen utama aplikasi BookShelf
export default function App() {

  // State untuk menyimpan input pencarian
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load font dari theme agar bisa digunakan di aplikasi
  const [loaded] = useFonts(fontType);

  const CategoryItem = ({ item, onPress, active }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{
          padding: 10,
          backgroundColor: active ? "#4CAF50" : "#eee",
          borderRadius: 20,
          marginRight: 10
        }}>
          <Text style={{ color: active ? "white" : "black" }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Jika font belum siap, tidak menampilkan UI
  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header aplikasi */}
      <Text style={styles.title}>📚 BookShelf</Text>

      {/* Deskripsi aplikasi */}
      <Text style={styles.subtitle}>
        Aplikasi katalog buku sederhana
      </Text>

      {/* Search Bar dengan icon */}
      <View style={styles.searchBox}>
        <Search size={18} color="gray" />
        <TextInput
          placeholder="Cari buku..."
          style={styles.searchInput}
          value={search}                 // ambil nilai input
          onChangeText={setSearch}      // update state saat mengetik
        />
      </View>

      {/* List kategori buku */}
      <FlatList
        data={CategoryList}
        horizontal
        extraData={selectedCategory} // 🔥 INI KUNCI UTAMA
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={{ minHeight: 50, marginBottom: 10 }}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => {
          const isSelected = item.name === selectedCategory;

          return (
            <CategoryItem
              item={item}
              active={isSelected} // 🔥 GANTI INI (bukan selected)
              onPress={() => setSelectedCategory(item.name)}
            />
          );
        }}
      />

      {/* Komponen grid buku (kirim search & kategori ke bawah) */}
      <BookGrid search={search} category={selectedCategory} />

    </SafeAreaView>
  );
}


// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white(),
    justifyContent: "flex-start",
  },

  // Judul utama
  title: {
    fontSize: 24,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  // Deskripsi
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    color: colors.grey(),
  },

  // Container search + icon
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey(0.15),
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 15,
  },

  // Input search
  searchInput: {
    marginLeft: 10,
    flex: 1,
    paddingVertical: 8,
    fontFamily: 'Pjs-Regular',
  },
});