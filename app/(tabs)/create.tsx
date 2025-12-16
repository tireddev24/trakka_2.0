import {useExpenses} from "@/context/expenseContext";
import React, {useEffect, useState} from "react";
import {
	Alert,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const default_category = {name: "Food", icon: "🍕", color: "#FFD700"};

const Create = ({navigation, route}: any) => {
	const [amount, setAmount] = useState("");
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState<any>(default_category);

	const {addExpense} = useExpenses();

	const handleAddExpense = () => {
		// Handle form submission logic here

		if (!amount || !title || !category) {
			Alert.alert("Please fill in all fields");
			return;
		}

		// console.log("Amount:", amount);
		// console.log("title:", title);
		// console.log("Category", category);

		addExpense({
			title,
			amount,
			category,
		});

		setAmount("0");
		setTitle("");
		setCategory(default_category);

		navigation.goBack();
	};

	useEffect(() => {
		if (route.params?.category) {
			setCategory(route.params?.category);
		}
	}, [route.params?.category]);

	const handleCategoryInput = () => {
		navigation.navigate("category");
	};

	return (
		<SafeAreaView className="bg-primary-200 h-full">
			<ScrollView
				contentContainerStyle={{padding: 6}}
				className="px-5 mt-10">
				<Text className="text-white font-rubik-medium text-xl text-center mt-5">
					Add New Expense
				</Text>
				<Text className="text-white font-rubik text-xl text-center mt-5">
					Enter the details of your expense to help track your
					spending.
				</Text>
				<View className="flex flex-col gap-5 mt-10">
					{/* Amount Input */}
					<View className="flex flex-col">
						<Text className="text-white font-rubik-medium text-xl mb-2 ml-2">
							Enter Amount
						</Text>
						<TextInput
							value={amount}
							onChangeText={setAmount}
							placeholder="₦0.00"
							className="p-4 border-2 border-white font-rubik text-xl text-white rounded-xl bg-primary-300"
						/>
					</View>

					{/* Title / Description Input */}
					<View className="flex flex-col">
						<Text className="text-white font-rubik-medium text-xl mb-2 ml-2">
							Title
						</Text>
						<TextInput
							value={title}
							onChangeText={setTitle}
							placeholder="What was it for?"
							className="p-4 border-2 border-white font-rubik text-xl text-white rounded-xl bg-primary-300"
						/>
					</View>

					{/* Category Input */}
					<View className="mb-5">
						<Text className="text-white font-rubik-medium text-xl mb-2 ml-2">
							Category
						</Text>

						<Pressable
							onPress={() => handleCategoryInput()}
							className="border border-primary-100 p-4 rounded-xl flex flex-row justify-between items-center">
							<View className="flex flex-row items-center">
								<Text className="text-white text-2xl">
									{category.icon}
								</Text>
								<Text className="text-white text-lg ">
									{category.name}
								</Text>
							</View>
							<Text className="text-2xl text-primary-100">
								&gt;
							</Text>
						</Pressable>
					</View>

					<TouchableOpacity
						className="bg-white shadow-sm shadow-zinc-300 rounded-lg w-full py-4 mt-5"
						onPress={() => handleAddExpense()}>
						<View className="flex flex-row items-center justify-center">
							<Text>Add Expense</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Create;

const styles = StyleSheet.create({});
