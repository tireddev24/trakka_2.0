import {useExpenses} from "@/context/expenseContext";
import {processDataForPieChart} from "@/utils/helper";
import React from "react";
import {View} from "react-native";
import {PieChart} from "react-native-gifted-charts";

const Chart = () => {
	const {expenses} = useExpenses();

	const pieChartData = processDataForPieChart(expenses);

	return (
		<View className="items-center">
			<PieChart
				donut
				data={pieChartData}
				showText
				textColor="white"
				font="Arial"
				fontWeight="600"
				fontStyle="oblique"
				showValuesAsLabels
			/>
		</View>
	);
};

export default Chart;
