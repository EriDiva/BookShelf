import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import { books } from "../data/books";

const [search, setSearch] = useState("");

const filteredBooks = books.filter((item) =>
 item.title.toLowerCase().includes(search.toLowerCase())
);