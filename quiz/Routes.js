import React from 'react';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
  import GameMode from './pages/GameMode';
  import HomePage from './pages/HomePage';

const Routes = createStackNavigator(
{
	HomePage:{screen:HomePage},
	GameMode:{screen:GameMode},
  },
    {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  }
);

export default createAppContainer(Routes);