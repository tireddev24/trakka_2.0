import Category from "@/components/category";
import icons from "@/constants/icons";
import {ExpenseProvider} from "@/context/expenseContext";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {Image, Text, View} from "react-native";
import Index from ".";
import Login from "../login";
import Profile from "../profile/profile";
import Signin from "../signin";
import Create from "./create";
import Insights from "./insights";

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
			<Tab.Screen
				name="index"
				component={Index}
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({focused}) => (
						<TabIcon
							icon={icons.home}
							focused={focused}
							title="Home"
						/>
					),
				}}
			/>
			<Tab.Screen
				name="create"
				component={Create}
				options={{
					title: "Create",
					headerShown: false,
					tabBarIcon: ({focused}) => (
						<TabIcon
							icon={icons.wallet}
							focused={focused}
							title="Create"
						/>
					),
				}}
			/>
			<Tab.Screen
				name="insights"
				component={Insights}
				options={{
					title: "Insights",
					headerShown: false,
					tabBarIcon: ({focused}) => (
						<TabIcon
							icon={icons.pieChart}
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
		<ExpenseProvider>
			<Stack.Navigator initialRouteName="login">
				<Stack.Screen
					name="signin"
					component={Signin}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="login"
					component={Login}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="bottomTabs"
					component={TabsLayout}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="profile"
					component={Profile}
					options={{
						headerStyle: {backgroundColor: "#0A213A"},
						headerTintColor: "white",
					}}
				/>
				<Stack.Screen
					name="category"
					component={Category}
					options={{presentation: "modal", headerShown: false}}
				/>
			</Stack.Navigator>
		</ExpenseProvider>
	);
};

export default AppNavigator;
