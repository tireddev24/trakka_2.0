import AppNavigator from "@/navigation/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";

const App = () => {
	return (
		<NavigationContainer>
			<AppNavigator />
		</NavigationContainer>
	);
};

export default App;
