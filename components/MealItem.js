import { Image, Pressable, Text, View, StyleSheet } from "react-native";

const MealItem = ({ title, imageUrl, duration, affordability, complexity }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ADC4CE",
    elevation: 4,
  },
  innerContainer:{
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: 'white',
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    color: 'white',
    marginHorizontal: 4,
    fontSize: 12,
  },
});
