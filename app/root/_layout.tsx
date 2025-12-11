import {Slot} from "expo-router";
import {ActivityIndicator, View} from "react-native";

export default function AppLayout() {
	let val = 1;

	if (val == 2) {
		//to show spinner when loading
		return (
			<View className="bg-white h-full flex justify-center items-center">
				<ActivityIndicator
					className="text-primary-200 "
					size={"large"}
				/>
			</View>
		);
	}

	return <Slot />;
}
