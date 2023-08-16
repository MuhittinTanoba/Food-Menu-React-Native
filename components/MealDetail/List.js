import { StyleSheet, Text, View } from "react-native";

const List = ({ list }) => {
  return list.map((element) => (
      <View key={element} style={styles.listItem}>
        <Text style={styles.itemText}>{element}</Text>
      </View>
    ));
  
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: "#ADC4CE"
    },
    itemText: {
        color: 'white'
    }
})