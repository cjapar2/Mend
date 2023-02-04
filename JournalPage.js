//Page for journaling thoughts you are having in the day
// Changes made by DAANISH KHAN

import { StyleSheet, Text, View, TextInput } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
}
const styles = StyleSheet.create({
   input: {
    backgroundColor: "white"
  },
//...
});