import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../libs/supabase";
import { colors } from "../../assets/theme";

export default function EditBook({ route, navigation }) {

  const { item } = route.params;

  const [title, setTitle] = useState(item.title);
  const [author, setAuthor] = useState(item.author);
  const [year, setYear] = useState(item.year);
  const [genre, setGenre] = useState(item.genre);
  const [description, setDescription] = useState(item.description);

  const handleUpdate = async () => {
    try {
      const { error } = await supabase
        .from("books")
        .update({
          title,
          author,
          year,
          genre,
          description,
        })
        .eq("id", item.id);

      if (error) throw error;

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        <Text style={styles.title}>
          Edit Buku
        </Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Judul"
        />

        <TextInput
          value={author}
          onChangeText={setAuthor}
          style={styles.input}
          placeholder="Penulis"
        />

        <TextInput
          value={year}
          onChangeText={setYear}
          style={styles.input}
          placeholder="Tahun"
        />

        <TextInput
          value={genre}
          onChangeText={setGenre}
          style={styles.input}
          placeholder="Genre"
        />

        <TextInput
          value={description}
          onChangeText={setDescription}
          style={styles.textArea}
          multiline
          placeholder="Deskripsi"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleUpdate}
        >
          <Text style={styles.buttonText}>
            Update Buku
          </Text>
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

  title: {
    fontSize: 24,
    fontFamily: "Pjs-Bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: colors.grey(0.1),
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },

  textArea: {
    backgroundColor: colors.grey(0.1),
    borderRadius: 12,
    padding: 14,
    height: 120,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

});