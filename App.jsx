import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/DashboardScreen';
import AllItems from './screens/AllItems';
import CreateItem from './screens/CreateScreen';
import HomeScreen from './HomeScreen';
// (Add LowStock, OutOfStock, Completed later)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AllItems" component={AllItems} />
        <Stack.Screen name="CreateItem" component={CreateItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
