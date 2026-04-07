import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SvgAsset } from "@/components/ui/svg-asset";
import { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const IntroScreen = ({ onNext }: { onNext: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1 overflow-x-hidden">
        <View className="flex-1 bg-primary-500 justify-center items-center gap-6">
          <SvgAsset
            source={require("@/assets/svg/logo.svg")}
            width={150}
            height={150}
          />
          <ThemedText type="subtitle">WAZANERLINGARA</ThemedText>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
};
