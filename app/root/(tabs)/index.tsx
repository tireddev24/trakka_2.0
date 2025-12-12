import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";

import {recentActivity} from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {useState} from "react";

export default function Index() {
	const [show, setShow] = useState(false);

	const handleShowBalance = () => {
		setShow(!show);
	};

	return (
		<View className="bg-primary-200 h-full ">
			<FlatList
				data={recentActivity}
				renderItem={({item}) => <></>}
				ListHeaderComponent={
					<View className="px-5 mt-10">
						<View className="flex flex-row items-center justify-between mt-5 p">
							<View className="flex flex-col items-start ml-2 justify-center">
								<Text className="text-lg font-rubik text-text-100">
									Hello, Michael
								</Text>
							</View>
							<Image
								source={images.profile}
								className="size-12 rounded-full"
							/>
						</View>
						<View className="flex-col flex items-start bg-primary-300 px-4 py-5  rounded-lg mt-10">
							<View className="flex  flex-row gap-5  items-center">
								<Text className="text-white text-xl">
									Wallet Balance
								</Text>
								<TouchableOpacity onPress={handleShowBalance}>
									{show ?
										<Image source={icons.eyeclose} />
									:	<Image source={icons.eyeopen} />}
								</TouchableOpacity>
							</View>
							<Text className="font-rubik-bold mt-3 text-5xl text-white">
								{show ? "N20,000" : "******"}
							</Text>
						</View>

						<View className="flex flex-col gap-5 p-5 bg-primary-300 rounded-lg mt-10">
							<View className="flex flex-row justify-between items-center">
								<Text className="text-white">Expenses</Text>
								<TouchableOpacity>
									<Image
										source={icons.rightArrow}
										className="text-white bg-white rounded-lg p-3 size-8"
									/>
								</TouchableOpacity>
							</View>
							<Text className="text-white">
								Expense Graph Image
							</Text>
						</View>
						<View className="flex flex-col justify-center items-center mt-10">
							<View className="flex flex-row px-4 items-center w-full justify-between">
								<Text className="text-white text-2xl font-rubik-medium">
									Recent Activity
								</Text>
								<TouchableOpacity>
									<Text className="text-primary-100">
										See all
									</Text>
								</TouchableOpacity>
							</View>
							{recentActivity.map((item, index) => (
								<View
									key={item.id}
									className="flex flex-row p-5 items-center">
									<Image
										source={icons.bell}
										className="rounded-full p-5 size-14 bg-white"
									/>
									<View className="flex flex-col items-center ml-5">
										<Text className="text-white font-rubik-medium text-xl">
											{item.narration}
										</Text>
										<Text className="font-rubik text-sm self-start mt-1 text-text-200">
											{item.date}
										</Text>
									</View>
									<View className="flex-1 items-end">
										<Text className="text-white font-rubik-medium text-xl">
											NGN {item.amount}
										</Text>
									</View>
								</View>
							))}
						</View>
					</View>
				}
			/>
		</View>
	);
}
