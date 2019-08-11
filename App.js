import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';

// EXERCÍCIOS
import Exercicio1Screen from './src/screens/Exercicio1Screen';
import Exercicio2Screen from './src/screens/Exercicio2Screen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,

// EXERCÍCIOS
    Exercicio1: Exercicio1Screen,
    Exercicio2: Exercicio2Screen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
