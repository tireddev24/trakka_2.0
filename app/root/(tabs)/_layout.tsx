import icons from "@/constants/icons";
import {Tabs} from "expo-router";
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

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

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					minHeight: 70,
					backgroundColor: "#0A213A",
					borderRadius: 20,
					borderTopColor: "#fff",
					borderTopWidth: 1,
					position: "absolute",
				},
			}}>
			<Tabs.Screen
				name="index"
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
			<Tabs.Screen
				name="expenses"
				options={{
					title: "Expenses",
					headerShown: false,
					tabBarIcon: ({focused}) => (
						<TabIcon
							icon={icons.chat}
							focused={focused}
							title="Expenses"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({focused}) => (
						<TabIcon
							icon={icons.person}
							focused={focused}
							title="Profile"
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
const styles = StyleSheet.create({});
