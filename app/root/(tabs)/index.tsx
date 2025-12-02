import {Text, View} from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Text className="text-3xl">Welcome to Trakka 2.0!</Text>
		</View>
	);
}
