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

const Login = ({navigation}: any) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const {getUser} = useExpenses();

	//implement with session management

	// useEffect(() => {
	// 	const user = getUser()!;

	// 	if (user) {
	// 		navigation.replace("bottomTabs");
	// 	}
	// }, []);

	const handleLogin = async () => {
		if (!userName || !password) {
			Alert.alert("Please fill in all fields");
		}
		const storedUser = await getUser();

		if (!storedUser) {
			Alert.alert("Error", "User not found");
		}

		navigation.navigate("bottomTabs");
	};

	return (
		<SafeAreaView className="bg-primary-200 h-full">
			<ScrollView
				contentContainerStyle={{padding: 6}}
				className="px-5 mt-10">
				<Text className="text-white font-rubik-medium text-xl text-center mt-5">
					Welcome Back
				</Text>
				<Text className="text-white font-rubik text-xl text-center mt-5">
					Login to your account
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
						onPress={() => handleLogin()}>
						<View className="flex flex-row items-center justify-center">
							<Text>Login</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View className="flex flex-row gap-2 mt-10  items-center justify-center">
							<Text className="text-xl font-rubik-medium">
								Don't have an account?{" "}
							</Text>
							<Text
								className="font-rubik-bold text-xl text-primary-100"
								onPress={() => navigation.navigate("signin")}>
								Sign up
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Login;
