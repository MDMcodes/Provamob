import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Fale() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Fale Conosco" component={Fale} />
      <Drawer.Screen name="Estoque" component={Estoque} />
    </Drawer.Navigator>
  );
}