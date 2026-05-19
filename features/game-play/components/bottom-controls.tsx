import { useState } from "react";
import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import type { TimerModeType } from "@/types/index.types";

type Props = {
	timerMode: TimerModeType;
	isLastPlayer: boolean;
	// disabledPrimary: boolean;
	isDiscussPaused: boolean;
	onPrimaryPress: () => void;
	onPausePress: () => void;
	onContinuePress: () => void;
	onVote: () => void;
};

export default function BottomControls({
	timerMode,
	isLastPlayer,
	// disabledPrimary,
	isDiscussPaused,
	onPrimaryPress,
	onPausePress,
	onContinuePress,
	onVote,
}: Props) {
	const [showVoteConfirmModal, setShowVoteConfirmModal] = useState(false);
	const primaryLabel = isLastPlayer ? "မဲပေးမယ်" : "နောက်တစ်ယောက်";
	const closeVoteConfirmModal = () => setShowVoteConfirmModal(false);
	const handleConfirmVote = () => {
		closeVoteConfirmModal();
		onVote();
	};

	const handleTurnPrimaryPress = () => {
		if (isLastPlayer) {
			setShowVoteConfirmModal(true);
			return;
		}

		onPrimaryPress();
	};

	if (timerMode === "duration" && isDiscussPaused) {
		return (
			<>
				<View className="flex-row justify-between gap-3 w-full">
					<View className="flex-1">
						<Button onPress={() => setShowVoteConfirmModal(true)}>
							<ThemedText type="subtitle">မဲပေးမယ်</ThemedText>
						</Button>
					</View>

					<View className="flex-1">
						<Button variant="outline" onPress={onContinuePress}>
							<ThemedText type="subtitle">ဆက်ကစားမယ်</ThemedText>
						</Button>
					</View>
				</View>

				<Modal
					visible={showVoteConfirmModal}
					variant="error"
					title="မဲပေးမှာ သေချာပြီလား"
					message="မဲပေးလိုက်တာနဲ့ ဆွေးနွေးချိန်ကို ဆက်မလုပ်နိုင်တော့ပါဘူး။"
					primaryButtonText="မဲပေးမယ်"
					secondaryButtonText="မပေးသေးဘူး"
					onPrimaryPress={handleConfirmVote}
					onSecondaryPress={closeVoteConfirmModal}
				/>
			</>
		);
	}

	return (
		<>
			<View className="w-full">
				{timerMode === "turn" ? (
					<Button onPress={handleTurnPrimaryPress}>
						<ThemedText type="subtitle">{primaryLabel}</ThemedText>
					</Button>
				) : (
					<Button onPress={onPausePress}>
						<ThemedText type="subtitle">ခဏရပ်ပြီး ဆွေးနွေးမယ်</ThemedText>
					</Button>
				)}
			</View>

			<Modal
				visible={showVoteConfirmModal}
				title="မဲပေးမှာ သေချာပြီလား"
				message="မဲပေးလိုက်တာနဲ့ ဆွေးနွေးချိန်ကို ဆက်မလုပ်နိုင်တော့ပါဘူး။"
				primaryButtonText="မဲပေးမယ်"
				secondaryButtonText="မပေးသေးဘူး"
				onPrimaryPress={handleConfirmVote}
				onSecondaryPress={closeVoteConfirmModal}
			/>
		</>
	);
}
