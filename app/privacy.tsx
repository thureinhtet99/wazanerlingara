import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SvgAsset } from "@/components/ui/svg-asset";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";

export default function Security() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <Pressable
          className="absolute left-1 top-1 h-10 w-10 items-center justify-center rounded-xl"
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <SvgAsset
            source={require("@/assets/svg/back-button.svg")}
            width={40}
            height={40}
          />
        </Pressable>

        <ThemedText type="title" className="max-w-[200px] text-center">
          ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု
        </ThemedText>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="gap-10">
        <ThemedText style={{ color: "gray" }}>
          Last Updated: March 8, 2026
        </ThemedText>
        <ThemedText type="subtitle">
          This game does not collect, store, or share any personal information
          from players.
        </ThemedText>
        <ThemedText type="subtitle">
          All gameplay happens locally on the device. No data is transmitted to
          external servers.
        </ThemedText>
        <ThemedText type="subtitle">
          If this changes in future updates, this policy will be updated
          accordingly.
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}
