import icons from "@/constants/icons";
import {useExpenses} from "@/context/expenseContext";
import React from "react";
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

interface settingsItemProps {
	icon: ImageSourcePropType;
	title: string;
	onPress?: () => void;
	textStyle?: string;
	showArrow?: boolean;
}

const SettingsItem = ({
	icon,
	title,
	onPress,
	textStyle,
	showArrow = true,
}: settingsItemProps) => (
	<TouchableOpacity
		className="flex flex-row items-center justify-between py-3"
		onPress={onPress}>
		<View className="flex flex-row items-center justify-center gap-3">
			<Image source={icon} className="rounded-full p-5 size-14 " />
			<Text
				className={`${textStyle} text-xl text-white font-rubik-medium `}>
				{title}
			</Text>
		</View>
		{showArrow && <Image source={icons.rightArrow} className="size-5" />}
	</TouchableOpacity>
);

const Profile = ({navigation}: any) => {
	const {user, removeUser} = useExpenses();

	const handleLogout = () => {
		navigation.navigate("login");
	};

	return (
		<SafeAreaView className="bg-primary-200 h-full">
			<View className="px-5 mt-10">
				<View className="bg-primary-300  rounded-lg mt-5 flex flex-col items-center p-5 justify-center">
					<Text className="text-white text-2xl mt-3 font-rubik-medium">
						{user.username}
					</Text>
					<Text className="text-white tex-lg mt-1 font-rubik">
						ID: {user.email}
					</Text>
				</View>
				{/* <View className="flex flex-col items-start mt-5 gap-3">
					{settings.map((item, index) => (
						<SettingsItem key={index} {...item} />
					))}
				</View> */}
				<View className="mt-10">
					<SettingsItem
						icon={icons.logout}
						title="Logout"
						textStyle="text-danger "
						onPress={handleLogout}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Profile;
