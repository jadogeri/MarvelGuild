import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "./src/screens/RosterScreen";
import { Provider  } from "./src/context/HeroContext";
import { Provider as HeroProvider } from "./src/context/HeroContext";
import RosterScreen from "./src/screens/RosterScreen";
import HeroDetailScreen from "./src/screens/HeroDetailScreen";
import AdventureScreen from "./src/screens/AdventureScreen";

import React from "react";

const navigator = createStackNavigator(
  
  {
   Adventure:AdventureScreen,
   Roster:RosterScreen,
   Detail:HeroDetailScreen
  
},
  {
    initialRouteName: "Roster",
    defaultNavigationOptions: {
      title: "MARVEL QUEST"
    }

  });

  const App = createAppContainer(navigator);

  export default () => {

    return <HeroProvider>
      <App />
    </HeroProvider>
  }

//export default createAppContainer(navigator);