import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { View } from "../../components/Themed";
import { Text } from "react-native-ui-lib";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text text30>Your Sets</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
