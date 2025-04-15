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
<Text>Donut Rosa</Text>
            </View>

            <View>
            <Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'https://www.searafoodsolutions.com.br/wp-content/uploads/2023/08/861372-mortadela-confianca-14kg-min-1024x1024.png',
  }}
/>
<Text>Mortadela 3,5kg</Text>
            </View>

            <View>
            <Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'https://s2-receitas.glbimg.com/2iR6e3M_vwOw1Wwb9AJNxwu6Siw=/0x0:984x612/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/q/W/eTsNWhTeai02Y0at4Q0g/torta-de-maca-do-rodrigo-hilbert-e-crocante-por-fora-e-fofinha-por-dentro.jpg',
  }}
/>
<Text>Torta de Maça</Text>
            </View>

            <View>
            <Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'https://acdn-us.mitiendanube.com/stores/124/083/products/cupcakes-cupcakedecorado1-4a78e9cedf0a5c783816139237197788-480-0.jpg',
  }}
/>
<Text>CupCake de Leite Ninho</Text>
            </View>

            <View>
            <Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'https://www.oxxo.com.br/ccstore/v1/images/?source=/file/v5857346341196254900/products/3647.product_3647_Salsicha%20Hot-Dog%20Sadia%20500g%2010%20Unidades_22.jpg&height=475&width=475&quality=0.8&outputFormat=JPEG',
  }}
/>
<Text>Salsicha para HotDog</Text>
            </View>
        </View>
    </Drawer.Navigator>
  );
}