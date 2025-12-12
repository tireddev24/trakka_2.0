import React, {useState} from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

const Expenses = () => {
	const [amount, setAmount] = useState("");
	const [Narration, setNarration] = useState("");

	const handleSubmit = () => {
		// Handle form submission logic here
		console.log("Amount:", amount);
		console.log("Narration:", Narration);
	};

	return (
		<View className="bg-primary-200 h-full">
			<View className="px-5 mt-10">
				<Text className="text-white font-rubik-medium text-xl text-center mt-5">
					Add Expenses
				</Text>
				<View className="flex flex-col gap-5 mt-10h">
					<View className="flex flex-col px-5 items-start">
						<Text className="text-white font-rubik-medium text-xl mb-2 ml-2">
							Amount
						</Text>
						<TextInput
							value={amount}
							onChangeText={setAmount}
							placeholder=""
							className="p-5 w-full font-rubik-medium text-xl text-white rounded-full bg-primary-300"
						/>
					</View>
					<View className="flex flex-col px-5 items-start">
						<Text className="text-white font-rubik-medium text-xl mb-2 ml-2">
							Narration
						</Text>
						<TextInput
							value={Narration}
							onChangeText={setNarration}
							placeholder=""
							className="p-5 w-full font-rubik-medium text-xl text-white rounded-full bg-primary-300"
						/>
					</View>
					<TouchableOpacity
						className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
						onPress={() => handleSubmit()}>
						<View className="flex flex-row items-center justify-center">
							<Text>Save</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Expenses;

const styles = StyleSheet.create({});
