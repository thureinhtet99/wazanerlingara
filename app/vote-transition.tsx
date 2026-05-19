import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Animated, Image } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { CONFIG } from "@/constants/config";
import { images } from "@/constants/icons";

const VOTE_AUTO_HIDE_MS = 3000;

export default function VoteTransition() {
	const [dotCount, setDotCount] = useState(0);
	const params = useLocalSearchParams<{
		votedPlayerIds?: string | string[];
	}>();

	useEffect(() => {
		const id = setInterval(() => {
			setDotCount((prev) => (prev + 1) % 6);
		}, 350);

		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			router.replace({
				pathname: CONFIG.VOTE_RESULT,
				params: {
					votedPlayerIds: params.votedPlayerIds,
				},
			});
		}, VOTE_AUTO_HIDE_MS);

		return () => clearTimeout(timer);
	}, [params.votedPlayerIds]);

	const dots = ".".repeat(dotCount);

	return (
		<ThemedView className="flex-1 items-center justify-center">
			<Image
				source={images.thinkingEye}
				resizeMode="cover"
				height={100}
				width={100}
				className="size-80"
			/>

			<Animated.View>
				<ThemedText type="subtitle" className="text-center">
					Imposterကို ဖော်ထုတ်နေပါပြီ {dots}
				</ThemedText>
			</Animated.View>
		</ThemedView>
	);
}
