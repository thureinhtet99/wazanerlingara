import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { changeToMMNumber } from "@/lib/change-to-mm-number";

export default function InstructionText({
  canProceedNext,
  timeLeft,
}: {
  canProceedNext: boolean;
  timeLeft: number;
}) {
  return (
    <View className="px-2">
      {!canProceedNext ? (
        <>
          <ThemedText type="description" className="text-center leading-8">
            ကိုယ့်roleကို ကြည့်ဖို့ ကတ်ကို ထိပါ။
          </ThemedText>
          <ThemedText type="description" className="text-center leading-8">
            အချိန် ({changeToMMNumber(timeLeft)}) စက္ကန့်သာ ရပါမယ်။
            ပြန်ကြည့်ခွင့်မရှိပါ။
          </ThemedText>
        </>
      ) : (
        <ThemedText
          type="description"
          className="text-center text-[20px] leading-8 text-white/95"
        >
          ပြန်ကြည့်ခွင့်မရှိပါ။
        </ThemedText>
      )}
    </View>
  );
}
