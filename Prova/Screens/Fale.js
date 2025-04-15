import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function Fale(navigation) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Fale Conosco" component={Fale} />
      <Drawer.Screen name="Estoque" component={Estoque} />
    </Drawer.Navigator>
  );
}