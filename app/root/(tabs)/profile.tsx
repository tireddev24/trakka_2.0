import {settings} from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

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
	<TouchableOpacity className="flex flex-row items-center justify-between py-3">
		<View className="flex flex-row items-center gap-3">
			<Image source={icon} className="rounded-full p-5 size-14 " />
			<Text
				className={`${textStyle} text-xl text-white font-rubik-medium `}>
				{title}
			</Text>
		</View>
		{showArrow && <Image source={icons.rightArrow} className="size-5" />}
	</TouchableOpacity>
);

const Profile = () => {
	return (
		<View className="bg-primary-200 h-full">
			<View className="px-5 mt-10">
				<View className="bg-primary-300  rounded-lg mt-5 flex flex-col items-center p-5 justify-center">
					<Image
						source={images.profile}
						className="size-20 rounded-full"
					/>
					<Text className="text-white text-2xl mt-3 font-rubik-medium">
						Michael Amao
					</Text>
					<Text className="text-white tex-lg mt-1 font-rubik">
						ID : 25030024
					</Text>
				</View>
				<View className="flex flex-col items-start mt-5 gap-3">
					{settings.map((item, index) => (
						<SettingsItem key={index} {...item} />
					))}
				</View>
			</View>
		</View>
	);
};

export default Profile;
