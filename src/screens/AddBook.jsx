import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { colors } from "../../assets/theme";
import axios from "axios";
import { API_URL } from "../utils/api";
import { ActivityIndicator } from "react-native";

export default function AddBook() {

  const navigation = useNavigation();

  // State input form
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {

  const result =
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }

  };

  // Tombol simpan
  const handleSave = async () => {

    setLoading(true);

    try {

      await axios.post(API_URL, {
        title,
        author,
        year,
        genre,
        image:
          image ||
          "https://picsum.photos/300/400",

        desc: description.substring(0, 80) + "...",

        fullDesc: description,

        description,

        rating: "5.0",

        createdAt: new Date(),
      });

      setLoading(false);

      navigation.goBack();

    } catch (error) {

        console.log(
          "ERROR POST:",
          error.response?.data || error.message
        );

        setLoading(false);
      }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color={colors.black()} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Tambah Buku
        </Text>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Judul Buku */}
        <Text style={styles.label}>Judul Buku</Text>

        <TextInput
          placeholder="Masukkan judul buku"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        {/* Penulis */}
        <Text style={styles.label}>Penulis</Text>

        <TextInput
          placeholder="Masukkan nama penulis"
          value={author}
          onChangeText={setAuthor}
          style={styles.input}
        />

        {/* Tahun */}
        <Text style={styles.label}>Tahun Terbit</Text>

        <TextInput
          placeholder="Masukkan tahun terbit"
          value={year}
          onChangeText={setYear}
          keyboardType="numeric"
          style={styles.input}
        />

        {/* Genre */}
        <Text style={styles.label}>Genre</Text>

        <TextInput
          placeholder="Masukkan genre buku"
          value={genre}
          onChangeText={setGenre}
          style={styles.input}
        />

        {/* Gambar Buku */}
        <Text style={styles.label}>
        Cover Buku
        </Text>

        <TouchableOpacity
        style={styles.imagePicker}
        onPress={pickImage}
        >

        {image ? (

            <Image
            source={{ uri: image }}
            style={styles.previewImage}
            />

        ) : (

            <Text style={styles.imageText}>
            Pilih Gambar Buku
            </Text>

        )}

        </TouchableOpacity>

        {/* Deskripsi */}
        <Text style={styles.label}>Deskripsi Buku</Text>

        <TextInput
          placeholder="Masukkan deskripsi buku"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
          style={styles.textArea}
        />

        {/* Tombol Simpan */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>
              Simpan Buku
            </Text>
          )}
        </TouchableOpacity>

      </ScrollView>

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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 15,
  },

  headerTitle: {
    fontSize: 22,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },

  label: {
    fontSize: 14,
    marginBottom: 6,
    marginTop: 12,
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

  textArea: {
    backgroundColor: colors.grey(0.1),
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    height: 120,
    textAlignVertical: "top",
    fontFamily: "Pjs-Regular",
  },

  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Pjs-Bold",
  },

  imagePicker: {
  height: 200,
  backgroundColor: colors.grey(0.1),
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
  overflow: "hidden",
  },

  imageText: {
  color: "gray",
  fontFamily: "Pjs-Regular",
  },

  previewImage: {
  width: "100%",
  height: "100%",
  },

});