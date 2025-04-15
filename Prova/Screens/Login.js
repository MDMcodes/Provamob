import { createStackNavigator } from '@react-navigation/stack';
import {Text, TextInput, Button} from 'react-native';

const Stack = createStackNavigator();

function Stack() {
  return (
    <Stack.Navigator>
        <View
        style={container}>
            <View>
            <Text>Complete o login</Text>
            <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Email"
      />
            <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Senha"
      />
            </View>
            <View>
            <Button
  onPress={Fale}
  title="Fale Conosco"
  color="white"
/>
            </View>
        </View>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});