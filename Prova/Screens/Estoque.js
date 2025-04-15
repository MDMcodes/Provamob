import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function Estoque(navigation) {
  return (
    <Drawer.Navigator>
        <View>
            <View>
            <Drawer.Screen name="Fale Conosco" component={Fale} />
            <Drawer.Screen name="Estoque" component={Estoque} />
            </View>
            <View>
            <Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'https://www.comidaereceitas.com.br/wp-content/uploads/2022/01/donuts_divertidos-780x452.jpg',
  }}
/>
            </View>
        </View>
    </Drawer.Navigator>
  );
}