import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

// EXERCÍCIOS
import ExercicioListScreen from './src/screens/ExercicioListScreen';
import Exercicio1Screen from './src/screens/Exercicio1Screen';
import Exercicio2Screen from './src/screens/Exercicio2Screen';
import Exercicio3Screen from './src/screens/Exercicio3Screen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,

// EXERCÍCIOS
    ExercicioList: ExercicioListScreen,
    Exercicio1: Exercicio1Screen,
    Exercicio2: Exercicio2Screen,
    Exercicio3: Exercicio3Screen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
