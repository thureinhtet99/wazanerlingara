import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/constants/config";
import { ONBOARDING_STEPS } from "@/constants/dummy-data";
import { IntroScreen } from "@/features/onboarding/components/intro";
import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";

const STEPS = [1, 2, 3];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const { completed, loading, finish } = useOnboarding();

  const currentScreen = ONBOARDING_STEPS[current - 1];
  const totalScreen = ONBOARDING_STEPS.length;

  useEffect(() => {
    if (completed) {
      router.replace(CONFIG.HOME);
    }
  }, [completed]);

  if (loading) {
    // TODO: add loading effect
    return null;
  }

  const handleComplete = async () => {
    await finish();
    router.replace(CONFIG.START);
  };

  const handleNext = () => {
    if (current === totalScreen) {
      void handleComplete();
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    void handleComplete();
  };

  if (current === 0) {
    return <IntroScreen onNext={handleNext} />;
  }

  return (
    <SafeAreaView className="flex-1 overflow-x-hidden">
      <ThemedView className="flex-1 gap-6 px-3 py-4">
        <Pressable
          onPress={handleSkip}
          className="self-end"
          accessibilityRole="button"
        >
          {({ pressed }) => (
            <ThemedText
              type="subtitle"
              className={`underline ${pressed ? "opacity-60" : "text-white"}`}
            >
              ကျော်သွားမယ်
            </ThemedText>
          )}
        </Pressable>

        <View className="flex-1 gap-6">
          <ThemedText type="legend">{currentScreen.title}</ThemedText>
          <ThemedText type="subtitle" numberOfLines={4} className="h-40">
            {currentScreen.description}
          </ThemedText>

          <View className="flex-1 items-center justify-center">
            <Image
              source={currentScreen.image}
              width={400}
              height={400}
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="mt-auto pb-1 gap-8">
          <View className="flex-row gap-1 items-center justify-center">
            {STEPS.map((item) => (
              <View
                key={item}
                className={`${current === item ? "w-8 bg-white" : "w-1.5 bg-white/40"} h-1.5 rounded-full`}
              />
            ))}
          </View>
          <Button onPress={handleNext}>
            <ThemedText type="subtitle">
              {current === totalScreen ? "စလိုက်ကြရအောင်" : "ရှေ့ဆက်မယ်"}
            </ThemedText>
          </Button>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}
