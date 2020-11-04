import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

const App = () => {
  const [messages, setMessages] = useState(['Message 1']);
  const [input, setInput] = useState('');
  return (
    <View style={styles.conatiner}>
      <ScrollView style={styles.scrollView}>
        {messages.map((message, i) => (
          <Text key={i}>{message}</Text>
        ))}
      </ScrollView>
      <View style={styles.messageArea}>
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.textInput}
          placeholder="Message"
          underlineColorAndroid="black"
        />
        <Button
          title="Send"
          onPress={() => {
            setMessages([input, ...messages]);
            setInput('');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
  messageArea: {
    flexDirection: 'row',
  },
});

export default App;
