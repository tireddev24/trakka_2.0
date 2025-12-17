import {
	ActivityIndicator,
	FlatList,
	Pressable,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import Empty from "@/components/empty";
import Expense from "@/components/expense";
import {useExpenses} from "@/context/expenseContext";
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index({navigation}: any) {
	const {expenses, isLoading, user} = useExpenses();

	console.log("====================================");
	console.log(user);
	console.log("====================================");
	const [show, setShow] = useState(false);

	const handleShowBalance = () => {
		setShow(!show);
	};

	const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);

	if (isLoading) {
		return (
			<View className="bg-primary-200 h-full flex justify-center items-center">
				<ActivityIndicator
					className="text-primary-100"
					size={"large"}
				/>
			</View>
		);
	}

	return (
		<SafeAreaView className="bg-primary-200 h-full ">
			{/* {isLoading && } */}
			<View className="px-5 mt-10">
				<View className="flex flex-row items-center justify-between mt-5 p">
					<View className="flex flex-col ml-2 justify-center">
						<View className="flex-row items-center mb-2">
							<Text className="text-lg font-rubik-semibold text-text-100">
								Hello {user.username}
							</Text>
							<Text className="text-3xl ml-2">👋🏾</Text>
						</View>
						<Text className="text-white text-lg font-semibold">
							Start tracking your expenses easily.
						</Text>
					</View>
					<Pressable onPress={() => navigation.navigate("profile")}>
						{/* <Image
							source={icons.person}
							className="size-12 rounded-full"
						/> */}
						<View className="rounded-full flex flex-1 p-4 justify-center items-center bg-primary-300 h-14 w-14 ">
							<Text className="text-3xl text-text-200 font-rubik-medium">
								{user.username.slice(0, 1)}
							</Text>
						</View>
					</Pressable>
				</View>

				<View className="flex-col flex items-center bg-primary-300 px-4 py-5  rounded-lg mt-10">
					<View className="flex  flex-row gap-5  items-center">
						<Text className="text-white text-xl">Spent So Far</Text>
						{/* <TouchableOpacity onPress={handleShowBalance}>
							{show ?
								<Image source={icons.eyeclose} />
							:	<Image source={icons.eyeopen} />}
						</TouchableOpacity> */}
					</View>
					<Text className="font-rubik-bold mt-3 text-5xl text-white">
						₦{totalSpent.toFixed(2)}
					</Text>
				</View>

				{/* <View className="flex flex-col gap-5 p-5 bg-primary-300 rounded-lg mt-10">
					<View className="flex flex-row justify-between items-center">
						<Text className="text-white">Expenses</Text>
						<Pressable>
							<Link href={"/insights"}>
								<Image
									source={icons.rightArrow}
									className="text-white bg-white rounded-lg p-3 size-8"
								/>
							</Link>
						</Pressable>
					</View>
					<View className="h-30">{<Chart /> </View>
				</View> 
				*/}
				<View className="flex flex-col justify-center items-center mt-10">
					<View className="w-full">
						<FlatList
							data={expenses}
							renderItem={({item}) => <Expense item={item} />}
							contentContainerStyle={{paddingBottom: 20}}
							ListHeaderComponent={
								<View className="flex flex-row px-4 items-center justify-between">
									<Text className="text-white text-2xl font-rubik-medium">
										Recent Activity
									</Text>
									<TouchableOpacity>
										<Text className="text-primary-100">
											{""}
										</Text>
									</TouchableOpacity>
								</View>
							}
							ListEmptyComponent={<Empty />}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
