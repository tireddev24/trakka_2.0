import {useExpenses} from "@/context/expenseContext";
import {processDataForPieChart} from "@/utils/helper";
import React from "react";
import {FlatList, Text, View} from "react-native";
import {PieChart} from "react-native-gifted-charts";
import {SafeAreaView} from "react-native-safe-area-context";

const Insights = () => {
	const {expenses} = useExpenses();

	const pieChartData = processDataForPieChart(expenses);

	const renderListItem = ({item}: any) => {
		return (
			<View className="flex flex-row items-center justify-between p-4 border-b border-gray-200">
				<View className="flex flex-row items-center">
					<View
						className="w-4 h-4 rounded-full mr-3"
						style={{backgroundColor: item.color}}
					/>
					<Text className="text-white font-rubik">{item.name}</Text>
				</View>
				<View>
					<Text className="text-white font-rubik-semibold">
						₦{item.amount.toFixed(2)}
					</Text>
					<Text className="text-white font-rubik-semibold">
						{item.value}%
					</Text>
				</View>
			</View>
		);
	};
	return (
		<SafeAreaView className="min-h-screen flex-1 bg-primary-200">
			<Text
				className="
			text-xl font-rubik-bold text-center text-primary-100 my-10">
				Spending Summary
			</Text>
			<View className="items-center">
				<PieChart
					donut
					data={pieChartData}
					showText
					textColor="white"
					fontWeight="700"
					fontStyle="oblique"
					showValuesAsLabels
				/>
			</View>
			<View>
				<FlatList data={pieChartData} renderItem={renderListItem} />
			</View>
		</SafeAreaView>
	);
};

export default Insights;
