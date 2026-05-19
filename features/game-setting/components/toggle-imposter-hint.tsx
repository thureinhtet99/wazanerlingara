import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import Switch from "@/components/ui/switch";
import { themeTokens } from "@/constants/theme-tokens";
import { useGameConfig } from "@/hooks/use-game-config";

export default function ToggleImposterHint() {
	const { config, updateGameConfig } = useGameConfig();
	const showImposterHint = config?.gameSetting.canImposterGetHint || false;

	const handleToggle = (value: boolean) => {
		if (!config) return;
		updateGameConfig({
			gameSetting: {
				...config.gameSetting,
				canImposterGetHint: value,
			},
		});
	};

	return (
		<View className="flex-row items-center justify-between rounded-2xl border border-white px-4 py-6 bg-neutral-500/10">
			<View className="flex-row items-center gap-2">
				<Ionicons name="bulb-sharp" size={34} color={themeTokens.ui.white} />
				<ThemedText type="description">Imposterကို အရိပ်အမြွက်ပေးမလား</ThemedText>
			</View>
			<Switch
				checked={showImposterHint}
				onChange={handleToggle}
				onLabel="On"
				offLabel="Off"
			/>
		</View>
	);
}
