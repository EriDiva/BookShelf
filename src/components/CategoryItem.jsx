import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function CategoryItem({ item, selectedCategory, onPress }) {
  const isActive = item.name === selectedCategory;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: isActive ? "#4CAF50" : "#e0e0e0" },
        ]}
      >
        <Text
          style={{
            color: isActive ? "#fff" : "#333",
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
});