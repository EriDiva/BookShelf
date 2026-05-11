import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

export default function CategoryList({
  data,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <View style={{ paddingVertical: 10 }}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            selected={item.name === selectedCategory}
            onPress={() => setSelectedCategory(item.name)}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}