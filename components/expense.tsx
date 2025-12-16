import React from "react";
import {Text, View} from "react-native";

const Expense = ({item}: any) => {
	return (
		<View key={item.id} className="flex flex-row  p-5 items-center">
			<View className="w-12 h-12 rounded-xl bg-primary-300 justify-center items-center mr-4">
				<Text className="text-xl">{item.icon}</Text>
			</View>

			<View className="items-start ml-2">
				{/* Title */}
				<View className="flex flex-col items-center">
					<Text className="text-white font-rubik-medium self- text-xl">
						{item.title}
					</Text>
				</View>

				{/* Category  */}
				<View
					style={{backgroundColor: item.color}}
					className={`mt-1 px-2 py-1 rounded-lg self-start`}>
					<Text className="text-white font-rubik-medium">
						{item.category}
					</Text>
				</View>
			</View>

			<View className="flex-1 items-end">
				<Text className="text-white font-rubik-medium text-xl">
					₦ {item.amount}
				</Text>
				<Text className="font-rubik text-sm  mt-1 text-text-200">
					{item.date}
				</Text>
			</View>
		</View>
	);
};

export default Expense;
