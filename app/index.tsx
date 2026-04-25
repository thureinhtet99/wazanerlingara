import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";

import SettingButton from "@/components/setting-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/constants/config";
import { themeTokens } from "@/constants/theme-tokens";

export default function Index() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1 gap-4">
      <SettingButton />

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
            <AntDesign
              name="play-circle"
              size={24}
              color={themeTokens.ui.white}
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
            <AntDesign
              name="question-circle"
              size={24}
              color={themeTokens.ui.white}
            />
            <ThemedText type="subtitle">ဘယ်လိုကစားရမလဲ</ThemedText>
          </View>
        </Button>
      </View>
    </ThemedView>
  );
}
