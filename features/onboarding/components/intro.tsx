import { useCallback, useEffect, useRef } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SvgAsset } from "@/components/ui/svg-asset";

const INTRO_AUTO_HIDE_MS = 2000;

export const IntroScreen = ({ onNext }: { onNext: () => void }) => {
  const hasNavigatedRef = useRef(false);

  const handleNext = useCallback(() => {
    if (hasNavigatedRef.current) {
      return;
    }

    hasNavigatedRef.current = true;
    onNext();
  }, [onNext]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, INTRO_AUTO_HIDE_MS);

    return () => clearTimeout(timer);
  }, [handleNext]);

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1 overflow-x-hidden">
        <Pressable
          onPress={handleNext}
          className="absolute right-5 top-5 z-10"
          accessibilityRole="button"
        >
          <ThemedText type="subtitle" className="underline text-white">
            ကျော်သွားမယ်
          </ThemedText>
        </Pressable>

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
