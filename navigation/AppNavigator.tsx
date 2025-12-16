import icons from "@/constants/icons";
import Create from "@/screens/Create";
import Home from "@/screens/Home";
import Insights from "@/screens/Insights";
import Profile from "@/screens/Profile";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {Image, Text, View} from "react-native";

const TabIcon = ({
	focused,
	icon,
	title,
}: {
	focused: boolean;
	icon: any;
	title: string;
}) => (
	<View className="flex-1 mt-3 flex flex-col items-center">
		<Image
			source={icon}
			tintColor={focused ? "#fff" : "#77AAFF"}
			resizeMode="contain"
			className="size-6"
		/>
		<Text
			className={`${focused ? "text-text-100 font-rubik-medium" : "text-primary-100 font-rubik"} text-xs w-full text-center mt-1`}>
			{title}
		</Text>
	</View>
);

const Tab = createBottomTabNavigator();

const TabsLayout = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					minHeight: 60,
					backgroundColor: "#0A213A",
					borderRadius: 20,
					borderTopColor: "#fff",
					borderTopWidth: 1,
					position: "absolute",
				},
			}}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Create" component={Create} />
			<Tab.Screen
				name="insights"
				component={Insights}
				options={{
					title: "Insights",
					headerShown: false,
					tabBarIcon: ({focused}) => (
						<TabIcon
							icon={icons.info}
							focused={focused}
							title="Insights"
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="BottomTabs" component={TabsLayout} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

export default AppNavigator;
