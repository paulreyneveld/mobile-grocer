import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {

  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  console.log(list)

  const handleAddItem = () => {
    setList(list.concat(item))
    setItem('')
  }

  return (
    <View style={styles.container}>
      <Text>Bae, what do we need?</Text>
      <TextInput 
        style={styles.input}
        value={item}
        onChangeText={ (text) => setItem(text)}

      />
      <Button 
        title="Add item"
        onPress={handleAddItem}
      />
      <Text>{item}</Text>
      {list.map((item, index) => 
        <Text key={index}
              onPress={() => console.log('hell')}
        >
          {item}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20
  },
  input: {
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1,
    marginBottom: 5
  }
});
