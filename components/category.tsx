import {CATEGORIES} from "@/constants/data";
import React from "react";
import {FlatList, Pressable, Text, View} from "react-native";

const Category = ({navigation}: any) => {
	const handleSelectedCategory = (category: any) => {
		navigation.popTo("bottomTabs", {
			screen: "create",
			params: {category},
		});
	};

	const renderItem = ({item}: any) => {
		console.log(item);

		return (
			<Pressable
				onPress={() => handleSelectedCategory(item)}
				className="flex flex-1 items-center p-4 m-2 bg-white rounded-xl shadow-md shadow-black-300 border border-primary-100">
				<Text className="text-3xl text-white mb-2">{item.icon}</Text>
				<Text className="text-md text-black font-rubik-medium text-center">
					{item.name}
				</Text>
			</Pressable>
		);
	};

	return (
		<View className="bg-primary-200 p-5">
			<View className="p-5">
				<Pressable onPress={() => navigation.goBack()}>
					<Text className="text-2xl text-white font-rubik-bold">
						X
					</Text>
				</Pressable>
			</View>
			<Text className="text-3xl font-rubik-bold text-primary-100 mt-4">
				Select Category
			</Text>
			<Text className="text-base font-rubik text-text-200 mt-2 mb-4">
				Select a category that best describes what you spent money on
			</Text>

			<FlatList
				data={CATEGORIES}
				renderItem={renderItem}
				keyExtractor={(item) => item.name}
				numColumns={2}
				contentContainerStyle={{padding: 4}}
			/>
		</View>
	);
};

export default Category;
