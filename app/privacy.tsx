import { View } from "react-native";

import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { themeTokens } from "@/constants/theme-tokens";

export default function Security() {
  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title" className="max-w-[200px] text-center">
          ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု
        </ThemedText>
      </View>

      <View className="flex-1 gap-8">
        <ThemedText style={{ color: themeTokens.palette.neutral[800] }}>
          Last Updated: March 8, 2026
        </ThemedText>
        <ThemedText type="description">
          This game does not collect, store, or share any personal information
          from players.
        </ThemedText>
        <ThemedText type="description">
          All gameplay happens locally on the device. No data is transmitted to
          external servers.
        </ThemedText>
        <ThemedText type="description">
          If this changes in future updates, this policy will be updated
          accordingly.
        </ThemedText>
      </View>
    </ThemedView>
  );
}
