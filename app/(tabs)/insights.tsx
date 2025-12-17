import Empty from "@/components/empty";
import {useExpenses} from "@/context/expenseContext";
import {processDataForPieChart} from "@/utils/helper";
import React from "react";
import {FlatList, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import Chart from "@/components/chart";

const Insights = () => {
	const {expenses} = useExpenses();

	const pieChartData = processDataForPieChart(expenses);

	const renderListItem = ({item}: any) => {
		return (
			<View className="flex flex-row items-center justify-between p-4 border-b border-gray-200">
				<View className="flex flex-row items-center mx-5">
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
					<Text className="text-white font-rubik-bold">
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
			text-3xl font-rubik-medium  text-center text-primary-100 my-10">
				Spending Summary
			</Text>
			<View>
				{expenses && (
					<FlatList
						data={pieChartData}
						ListEmptyComponent={
							<Empty
								icon="🥲"
								title={"Oops, No record to show"}
								message={""}
							/>
						}
						ListHeaderComponent={
							<View className="my-3">
								{expenses.length > 0 && <Chart />}
							</View>
						}
						renderItem={renderListItem}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default Insights;
