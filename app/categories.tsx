import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/constants/config";
import { CATEGORIES } from "@/constants/dummy-data";
import CategoryCard from "@/features/categories/components/category-card";
import { useAudioSettings } from "@/hooks/use-audio-settings";
import { useGameConfig } from "@/hooks/use-game-config";
import { CategoryType } from "@/types/index.types";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Loading from "./loading";

export default function ChooseCategories() {
  const { config, loading, updateGameConfig } = useGameConfig();
  const [category, setCategory] = useState<CategoryType>(config.category);
  const { playClickSound } = useAudioSettings();

  const handleClick = (type: CategoryType) => {
    setCategory(type);
    playClickSound();
  };

  const handleGameForward = () => {
    if (!category) return;

    const selectedCategory = CATEGORIES.find((item) => item.type === category);
    if (!selectedCategory) return;

    updateGameConfig({
      category: selectedCategory.type,
    });
    router.push(CONFIG.GAME_SETTING);
  };

  if (loading) return <Loading />;

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">ရွေးချယ်စရာများ</ThemedText>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between gap-4">
          {CATEGORIES.map((item) => (
            <View key={item.type} className="w-[48%]">
              <CategoryCard
                category={item}
                isSelected={item.type === category}
                handleClick={handleClick}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="mt-auto pt-6">
        <Button onPress={handleGameForward} disabled={!category}>
          <ThemedText type="subtitle">ရှေ့ဆက်မယ်</ThemedText>
        </Button>
      </View>
    </ThemedView>
  );
}
