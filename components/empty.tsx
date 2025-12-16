import React from "react";
import {Text, View} from "react-native";

interface Props {
	title?: any;
	message?: any;
}
const Empty = ({
	title = "No Expenses Yet",
	message = "Add a new expense to see it in your list",
}: Props) => {
	return (
		<View className="flex-1 justify-center items-center p-8 mt-10">
			<Text className="text-6xl mb-4">📝</Text>
			<Text className="font-rubik-bold text-xl text-white mb-2">
				{title}
			</Text>
			<Text className="font-rubik-medium text-lg text-white">
				{message}
			</Text>
		</View>
	);
};

export default Empty;
