import { useRouter } from "expo-router";
import { Image, Pressable, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { SvgAsset } from "@/components/ui/svg-asset";
import { CONFIG } from "@/constants/config";
import { useAudioSettings } from "@/hooks/use-audio-settings";

export default function Index() {
  const router = useRouter();
  const { playClickSound } = useAudioSettings();

  return (
    <ThemedView className="flex-1 gap-4">
      <View className="flex-row items-center justify-end">
        <Pressable
          className="w-14 h-16 flex items-center justify-center"
          onPress={() => {
            playClickSound();
            router.push(CONFIG.SETTING);
          }}
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

      <View className="flex-1 items-center justify-end">
        <Image
          source={require("@/assets/images/onboarding.png")}
          resizeMode="cover"
        />
      </View>

      <View className="gap-4">
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
            <ThemedText type="subtitle">စကစားကြမယ်</ThemedText>
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
            <ThemedText type="subtitle">ဘယ်လိုကစားရမလဲ</ThemedText>
          </View>
        </Button>
      </View>
    </ThemedView>
  );
}
