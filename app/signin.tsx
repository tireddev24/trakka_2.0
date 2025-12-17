import {useExpenses} from "@/context/expenseContext";
import React, {useState} from "react";
import {
	Alert,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Signin = ({navigation}: any) => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const {saveUser, getUser} = useExpenses();

	const handleRegister = async () => {
		if (!userName || !email || !password) {
			Alert.alert("Please fill in all fields");
		}

		await saveUser({
			username: userName,
			email: email,
			password: password,
		});

		Alert.alert("Success", "Account created");

		await getUser();

		navigation.navigate("bottomTabs");
	};

	return (
		<SafeAreaView className="bg-primary-200 h-full">
			<ScrollView
				contentContainerStyle={{padding: 6}}
				className="px-5 mt-10">
				<Text className="text-white font-rubik-medium text-xl text-center mt-5">
					Welcome to Trakka 2.0
				</Text>
				<Text className="text-white font-rubik text-xl text-center mt-5">
					Register
				</Text>
				<View className="flex flex-col gap-5 mt-10">
					{/* Amount Input */}
					<View className="flex flex-col">
						<Text className="text-white font-rubik-medium text-xl mb-2 ml-2">
							Enter Username
						</Text>
						<TextInput
							value={userName}
							onChangeText={setUserName}
							placeholder="johndoe"
							placeholderTextColor={"gray"}
							className="p-4 border-2 border-white font-rubik text-xl text-white rounded-xl bg-primary-300"
						/>
					</View>

					<View className="flex flex-col gap-5 mt-10">
						{/* Amount Input */}
						<View className="flex flex-col">
							<Text className="text-white font-rubik-medium text-xl mb-2 ml-2">
								Enter email
							</Text>
							<TextInput
								value={email}
								onChangeText={setEmail}
								placeholder="jonedoe@1.com"
								placeholderTextColor={"gray"}
								className="p-4 border-2 border-white font-rubik text-xl text-white rounded-xl bg-primary-300"
							/>
						</View>

						{/* Title / Description Input */}
						<View className="flex flex-col">
							<Text className="text-white font-rubik-medium text-xl mb-2 ml-2">
								Password
							</Text>
							<TextInput
								value={password}
								onChangeText={setPassword}
								keyboardType="visible-password"
								placeholder="*******"
								placeholderTextColor={"gray"}
								className="p-4 border-2 border-white  font-rubik text-xl text-white rounded-xl bg-primary-300"
							/>
						</View>
					</View>

					<TouchableOpacity
						className="bg-white shadow-sm shadow-zinc-300 rounded-lg w-full py-4 mt-5"
						onPress={() => handleRegister()}>
						<View className="flex flex-row items-center justify-center">
							<Text>Create new account</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View className="flex flex-row gap-2 items-center justify-center mt-10">
							<Text className="text-xl font-rubik-medium">
								Already have an account?{" "}
							</Text>
							<Text
								className="font-rubik-bold text-xl text-primary-100"
								onPress={() => navigation.navigate("login")}>
								Log in
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Signin;
