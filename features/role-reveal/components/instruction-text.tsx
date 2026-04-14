import { ThemedText } from "@/components/themed-text";
import { View } from "react-native";

export default function InstructionText({ confirmed }: { confirmed: boolean }) {
  return (
    <View className="px-2">
      {!confirmed ? (
        <>
          <ThemedText type="description" className="text-center leading-8">
            ကိုယ့်roleကို ကြည့်ဖို့ ကတ်ကို ထိပါ။
          </ThemedText>
          <ThemedText type="description" className="text-center leading-8">
            အချိန် (၁၀) စက္ကန့်သာ ရပါမယ်။ ပြန်ကြည့်ခွင့်မရှိပါ။
          </ThemedText>
        </>
      ) : (
        <ThemedText
          type="description"
          className="text-center text-[20px] leading-8 text-white/95"
        >
          ပြန်ကြည့် ခွင့် မရှိပါ။
        </ThemedText>
      )}
    </View>
  );
}
