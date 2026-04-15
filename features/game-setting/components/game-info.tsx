import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useGameConfig } from "@/hooks/use-game-config";

const getCategoryTitle = (categoryType: string): string => {
  const categoryMap: Record<string, string> = {
    animals: "တိရစ္ဆာန်များ",
    foods: "အစားအသောက်",
    locations: "နေရာဒေသ",
    countries: "နိုင်ငံများ",
    movies: "ရုပ်ရှင်",
    jobs: "အလုပ်အကိုင်",
    technologies: "နည်းပညာ",
    imaginations: "စိတ်ကူးယဉ် အရာများ",
    supes: "စူပါဟီးရိုးများ",
    nature: "သဘာဝ",
    histories: "သမိုင်း",
    sports: "အားကစား",
  };
  return categoryMap[categoryType] || categoryType;
};

const getGameModeTitle = (mode: string): string => {
  const modeMap: Record<string, string> = {
    word: "စကားလုံးဂိမ်း",
    question: "အမေးအဖြေဂိမ်း",
  };
  return modeMap[mode] || mode;
};

const transformNumber = (num: number): string => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const mmNumbers = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];
  return String(num)
    .split("")
    .map((digit) => mmNumbers[numbers.indexOf(digit)] || digit)
    .join("");
};

export default function GameInfo() {
  const { config } = useGameConfig();
  const playerCount = config?.players.length || 0;
  const gameMode = config?.gameMode || "word";
  const category = config?.category || "animals";

  return (
    <View className="rounded-2xl px-4 py-6">
      <View className="mb-3 flex-row items-center justify-between">
        <ThemedText type="description">ပါဝင်ကစားမည့်သူ အရေအတွက်</ThemedText>
        <ThemedText type="description">
          ({transformNumber(playerCount)})ယောက်
        </ThemedText>
      </View>

      <View className="mb-3 flex-row items-center justify-between">
        <ThemedText type="description">ဂိမ်းအမျိုးအစား:</ThemedText>
        <ThemedText type="description">{getGameModeTitle(gameMode)}</ThemedText>
      </View>

      <View className="flex-row items-center justify-between">
        <ThemedText type="description">အမျိုးအစား:</ThemedText>
        <ThemedText type="description">{getCategoryTitle(category)}</ThemedText>
      </View>
    </View>
  );
}
