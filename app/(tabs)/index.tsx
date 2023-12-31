import { ScrollView, StyleSheet } from 'react-native';
import { Drawer, Text, View, Colors } from 'react-native-ui-lib';

const items = [
  {
    name: 'item one',
  },
  {
    name: 'item two',
  },
  {
    name: 'item three',
  },
  {
    name: 'item four',
  },
  {
    name: 'item five',
  },
  {
    name: 'item six',
  },
  {
    name: 'item seven',
  },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text text30>Your Sets</Text>
      <ScrollView>
        {items.map((item) => (
          <Drawer
            rightItems={[
              {
                text: 'Read',
                background: Colors.blue30,
                onPress: () => console.log('read pressed'),
              },
            ]}
            leftItem={{
              text: 'Delete',
              background: Colors.red30,
              onPress: () => console.log('delete pressed'),
            }}
          >
            <View centerV padding-s4 bg-white style={{ height: 60 }}>
              <Text text70>{item.name}</Text>
            </View>
          </Drawer>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
