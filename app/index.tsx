import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { SvgAsset } from "@/components/ui/svg-asset";
import { CONFIG } from "@/constants/config";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1">
      <View className="mb-2 flex-row items-center justify-end">
        <Pressable
          className="h-12 w-12 items-center justify-center"
          onPress={() => router.push(CONFIG.SETTING)}
          accessibilityRole="button"
          accessibilityLabel="Open settings"
        >
          <SvgAsset
            source={require("@/assets/svg/setting.svg")}
            width={40}
            height={40}
          />
        </Pressable>
      </View>

      <View className="relative mb-5 flex-1 items-center justify-end overflow-hidden">
        <SvgAsset source={require("@/assets/svg/onboarding-1.svg")} />
      </View>

      <View className="gap-4 pb-3">
        <Button
          onPress={() => router.push(CONFIG.START)}
          accessibilityRole="button"
          accessibilityLabel="Start game"
        >
          <View className="flex-row items-center justify-center gap-2">
            <SvgAsset
              source={require("@/assets/svg/play-icon.svg")}
              width={30}
              height={30}
            />
            <ThemedText type="subtitle" className="text-xl text-white">
              စကစားကြမယ်
            </ThemedText>
          </View>
        </Button>

        <Button
          variant="outline"
          onPress={() => router.push(CONFIG.HOW_TO_PLAY)}
          accessibilityRole="button"
          accessibilityLabel="How to play"
        >
          <View className="flex-row items-center justify-center gap-2">
            <SvgAsset
              source={require("@/assets/svg/question-mark-icon.svg")}
              width={30}
              height={30}
            />
            <ThemedText
              type="subtitle"
              className="font-example text-xl text-white"
            >
              ဘယ်လိုကစားရမလဲ
            </ThemedText>
          </View>
        </Button>
      </View>
    </ThemedView>
  );
}
