import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress, navigation }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    color:'white',
    fontWeight: "bold",
    fontSize: 16,
  },
});
