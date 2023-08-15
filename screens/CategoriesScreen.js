import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";



const CategoriesScreen = ({ navigation }) => {
    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate("Meal Overview", {
                categoryId: itemData.item.id,
            });
        };
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
            navigation={navigation}
          />
        );
      };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
