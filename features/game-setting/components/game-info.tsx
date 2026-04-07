import { ThemedText } from "@/components/themed-text";
import { View } from "react-native";

export default function GameInfo() {
  return (
    <View className="px-1 pb-1">
      <View className="mb-3 flex-row items-center justify-between">
        <ThemedText>ပါဝင်ကစားမည့်သူ အရေအတွက်</ThemedText>
        <ThemedText>(၁)ယောက်</ThemedText>
      </View>

      <View className="mb-3 flex-row items-center justify-between">
        <ThemedText>ဂိမ်းအမျိုးအစား:</ThemedText>
        <ThemedText>စကားလုံးဂိမ်း</ThemedText>
      </View>

      <View className="flex-row items-center justify-between">
        <ThemedText>အမျိုးအစား:</ThemedText>
        <ThemedText>အစားအသောက်</ThemedText>
      </View>
    </View>
  );
}
