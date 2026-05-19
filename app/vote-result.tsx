import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { Image, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { SvgAsset } from "@/components/ui/svg-asset";
import { CONFIG } from "@/constants/config";
import {
	IMPOSTER_WIN_QUOTES,
	TEAMMATES_WIN_QUOTES,
} from "@/constants/dummy-data";
import { images } from "@/constants/icons";
import { themeTokens } from "@/constants/theme-tokens";
import { useGameConfig } from "@/hooks/use-game-config";
import {
	getAllowedImposterCount,
	isExactIdSetMatch,
	parseIdsParam,
} from "@/lib/imposter";

export default function VoteResult() {
	const { config } = useGameConfig();

	const params = useLocalSearchParams<{
		votedPlayerIds?: string | string[];
	}>();

	const votedPlayerIds = parseIdsParam(params.votedPlayerIds);
	const expectedImposterCount = getAllowedImposterCount(
		config.players.length,
		config.gameSetting.imposterCount,
	);
	const imposterIds = config.imposterIds.slice(0, expectedImposterCount);
	const isDoubleImposterMode = imposterIds.length === 2;

	const votedPlayers = config.players.filter((player) =>
		votedPlayerIds.includes(player.id),
	);
	const imposters = config.players.filter((player) =>
		imposterIds.includes(player.id),
	);
	const didCatchImposter = isExactIdSetMatch(votedPlayerIds, imposterIds);

	const outcomeTitle = didCatchImposter ? "Teammates Win!" : "Imposter Win!";

	const outcomeQuote = useMemo(() => {
		const quotePool = didCatchImposter
			? TEAMMATES_WIN_QUOTES
			: IMPOSTER_WIN_QUOTES;
		const filteredQuotes = config.gameSetting.canImposterGetHint
			? quotePool
			: quotePool.filter((quote) => !quote.isHint);

		const safePool = filteredQuotes.length > 0 ? filteredQuotes : quotePool;
		const randomIndex = Math.floor(Math.random() * safePool.length);

		return safePool[randomIndex]?.text ?? "";
	}, [didCatchImposter, config.gameSetting.canImposterGetHint]);

	const canGetHint = config.gameSetting.canImposterGetHint;
	const hint =
		config.gameMode === "word" ? config.word?.hint : config.question?.hint;
	const keyword =
		config.gameMode === "word" ? config.word?.text : config.question?.text;

	const handleRepeatGame = () => {
		router.replace(CONFIG.START);
	};

	const handleExit = () => {
		router.replace(CONFIG.HOME);
	};

	return (
		<ThemedView className="flex-1 gap-12">
			<View className="gap-2 py-6 px-10">
				<ThemedText
					type="title"
					className="text-center"
					style={
						didCatchImposter
							? { color: themeTokens.palette.success[400] }
							: { color: themeTokens.palette.primary[400] }
					}
				>
					{outcomeTitle}
				</ThemedText>

				<ThemedText type="subtitle" className="text-center" numberOfLines={3}>
					{outcomeQuote}
				</ThemedText>
			</View>

			<View className="flex-1 items-center justify-center">
				<Image
					source={didCatchImposter ? images.jimCarreyDance : images.laughInEvil}
					alt={votedPlayers[0]?.name}
					resizeMode="cover"
					borderRadius={10}
					className="w-[340px] h-[340px]"
				/>
			</View>

			<View className="gap-2">
				<ThemedText type="description" className="text-center">
					{isDoubleImposterMode
						? `Imposters: ${imposters.map((player) => player.name).join(", ") || "Unknown"}`
						: `Imposter: ${imposters[0]?.name ?? "Unknown"}`}
				</ThemedText>

				{canGetHint && (
					<ThemedText type="description" className="text-center">
						Imposter hint: {hint}
					</ThemedText>
				)}

				<ThemedText type="description" className="text-center">
					Keyword: {keyword}
				</ThemedText>
			</View>

			<View className="mt-auto gap-4">
				<Button onPress={handleRepeatGame}>
					<View className="flex-row items-center justify-center gap-2">
						<AntDesign
							name="play-circle"
							size={24}
							color={themeTokens.ui.white}
						/>
						<ThemedText type="subtitle">နောက်တစ်ပွဲ ဆော့မယ်</ThemedText>
					</View>
				</Button>

				<Button variant="outline" onPress={handleExit}>
					<View className="flex-row items-center justify-center">
						<SvgAsset
							source={require("@/assets/svg/home.svg")}
							width={40}
							height={40}
						/>
						<ThemedText type="subtitle">ထွက်မယ်</ThemedText>
					</View>
				</Button>
			</View>
		</ThemedView>
	);
}
