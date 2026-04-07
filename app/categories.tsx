import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/constants/config";
import { CATEGORIES } from "@/constants/dummy-data";
import CategoryCard from "@/features/categories/components/category-card";
import { CategoryType } from "@/types/index.types";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function ChooseCategories() {
  // const { config, updateGameConfig } = useGameConfigStore();
  const [category, setCategory] = useState<CategoryType | undefined>();

  const handleClick = (type: CategoryType) => {
    setCategory(type);
  };

  const handleGameForward = () => {
    if (!category) return;

    const selectedCategory = CATEGORIES.find((item) => item.type === category);
    if (!selectedCategory) return;

    // if (config) {
    //   updateGameConfig({
    //     category: {
    //       id: selectedCategory.type,
    //       name: selectedCategory.title,
    //     },
    //   });
    router.push(CONFIG.GAME_SETTING);
  };

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">ရွေးချယ်စရာများ</ThemedText>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="pb-2">
        <View className="flex-row flex-wrap">
          {CATEGORIES.map((item) => (
            <View key={item.type} className="w-1/2 px-2 mb-4">
              <CategoryCard
                category={item}
                isSelected={item.type === category}
                onSelect={handleClick}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="mt-auto pb-1">
        <Button onPress={handleGameForward} disabled={!category}>
          <ThemedText type="subtitle">ရှေ့ဆက်မယ်</ThemedText>
        </Button>
      </View>
    </ThemedView>
  );
}
