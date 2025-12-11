import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Expenses = () => {
	return (
		<View
			className="bg-primary-200 "
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Text className="text-3xl text-text-100">Expenses page!</Text>
		</View>
	);
};

export default Expenses;

const styles = StyleSheet.create({});
