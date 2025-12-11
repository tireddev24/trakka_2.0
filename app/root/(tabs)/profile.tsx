import React from "react";
import {Text, View} from "react-native";

const Profile = () => {
	return (
		<View
			className="bg-primary-200 "
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Text className="text-3xl text-text-100">Profile page</Text>
		</View>
	);
};

export default Profile;
