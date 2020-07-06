import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {LoginScreen} from './screens/LoginScreen/LoginScreen';
import {PasswordRecoveryScreen} from './screens/PasswordRecoveryScreen';
import {RoutesScreenConnector} from './screens/RoutesScreen';
import {RouteScreenConnector} from './screens/RouteScreen';
import {DestinationScreenConnector} from './screens/DestinationScreen';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    PasswordRecovery: PasswordRecoveryScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const AppStack = createStackNavigator(
  {
    Routes: RoutesScreenConnector,
    Route: RouteScreenConnector,
    Destination: DestinationScreenConnector,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Routes',
  },
);

export const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
