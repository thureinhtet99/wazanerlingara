import { Text, View } from "react-native";

export default function NotFound() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text className="text-white">404 not found</Text>
		</View>
	);
}
