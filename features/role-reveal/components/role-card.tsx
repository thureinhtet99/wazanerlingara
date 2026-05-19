import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { type ImageKey, images } from "@/constants/icons";
import { ThemeTokens } from "@/constants/theme";
import { themeTokens } from "@/constants/theme-tokens";
import { useAudioSettings } from "@/hooks/use-audio-settings";
import { isImposter } from "@/lib/imposter";
import type { RoleCardType } from "@/types/index.types";

export default function RoleCard({
	currentPlayer,
	gameMode,
	revealContent,
	imposterIds,
	imposterCanGetHint,
	hint,
	showBlur,
	revealed,
	confirmed,
	timeLeft,
	handleClickCard,
	handleReveal,
}: RoleCardType) {
	const { playClickSound } = useAudioSettings();
	const shouldDimCard = timeLeft <= 0 || confirmed;
	const canReveal = timeLeft > 0 && !confirmed;
	const imageKey = currentPlayer.imageId as ImageKey;
	const playerAvatarSource = images[imageKey] ?? images.avatar1;
	const playerIsImposter = isImposter(currentPlayer.id, imposterIds);

	return (
		<View
			key={currentPlayer.id}
			className="flex-1 items-center justify-center max-h-[500px]"
		>
			<View
				className={`flex-1 w-[340px] rounded-3xl border border-white/5 bg-black p-2 ${shouldDimCard ? "opacity-35" : ""}`}
				style={{ shadowColor: "white", elevation: 8 }}
			>
				{!revealed ? (
					<Pressable
						tabIndex={0}
						disabled={!canReveal}
						onPress={() => {
							if (showBlur) {
								handleReveal();
								return;
							}

							handleClickCard();
							playClickSound();
						}}
						className="relative flex-1 items-center justify-center rounded-3xl px-4 border border-white/40"
					>
						<View className="relative h-[300px] w-full max-w-[290px] items-center justify-center overflow-hidden rounded-3xl">
							<Image
								source={playerAvatarSource}
								width={300}
								height={330}
								resizeMode="contain"
								blurRadius={showBlur ? 16 : 0}
							/>

							{showBlur ? (
								<View className="absolute inset-0 items-center justify-center gap-2 bg-black/65">
									<Ionicons
										name="eye-sharp"
										size={34}
										color={themeTokens.ui.white}
									/>
									<ThemedText type="description">ကြည့်မယ်</ThemedText>
								</View>
							) : null}
						</View>

						{!showBlur && (
							<ThemedText type="title" className="text-center">
								{currentPlayer.name}
							</ThemedText>
						)}
					</Pressable>
				) : (
					<View className="flex-1 flex-col items-center justify-center gap-8 rounded-3xl bg-black px-4">
						<View className="gap-2">
							{!playerIsImposter && (
								<ThemedText type="description" className="text-center">
									{gameMode === "question" ? "လျှို့ဝှက်မေးခွန်း" : "လျှို့ဝှက်စကားလုံး"}
								</ThemedText>
							)}

							<ThemedText
								type="title"
								className="text-center"
								style={{
									color: playerIsImposter
										? ThemeTokens.ui.danger
										: ThemeTokens.ui.white,
								}}
							>
								{playerIsImposter ? "Imposter" : revealContent || "Secret"}
							</ThemedText>

							{playerIsImposter && imposterCanGetHint && hint ? (
								<ThemedText type="subtitle" className="mt-3 text-center">
									Hint: {hint}
								</ThemedText>
							) : null}
						</View>

						{playerIsImposter ? (
							<Image
								source={require("@/assets/images/avatar/imposter.png")}
								width={300}
								height={330}
								resizeMode="contain"
							/>
						) : null}
					</View>
				)}
			</View>
		</View>
	);
}
