import {CATEGORIES} from "@/constants/data";

export const getId = () => {
	return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
};

export const getDate = () => {
	return new Date().toISOString().split("T")[0];
};

export const getCategoryColor = (color: any) => {
	const category = CATEGORIES.find((cat) => cat.color === color);
	return category ? category.color : "#808080";
};

export const processDataForPieChart = (expenses: any) => {
	console.log("Processing data for pie chart:", expenses);

	if (!Array.isArray || expenses.length === 0) {
		return [];
	}

	const totalSpending = expenses.reduce(
		(sum: number, item: any) => sum + item.amount,
		0,
	);

	if (totalSpending === 0) {
		return [];
	}

	const spendingByCategory = expenses.reduce((acc: any, expense: any) => {
		acc[expense.category] = (acc[expense.category] || 0) + expense.amount;

		return acc;
	}, {});

	const pieChartData = Object.keys(spendingByCategory).map((category) => {
		const amount = spendingByCategory[category];
		const percentage = Math.round((amount / totalSpending) * 100);
		const categoryInfo = CATEGORIES.find((cat) => cat.name === category);
		return {
			name: category,
			amount,
			value: percentage,
			text: `${percentage}%`,
			color: categoryInfo ? categoryInfo.color : "#808080",
		};
	});

	console.log(pieChartData);

	return pieChartData;
};
