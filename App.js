import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import { Provider as HeroProvider } from "./src/context/HeroContext";
import RosterScreen from "./src/screens/Roster/RosterScreen";
import HeroDetailScreen from "./src/screens/HeroDetail/HeroDetailScreen";
import AdventureScreen from "./src/screens/Adventure/AdventureScreen";

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