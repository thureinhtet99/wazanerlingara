import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { DEFAULT_GAME_CONFIG } from "@/constants/config";
import { changeToMMNumber } from "@/lib/change-to-mm-number";

export default function InstructionText({
  canProceedNext,
}: {
  canProceedNext: boolean;
}) {
  return (
    <View className="px-2">
      {!canProceedNext ? (
        <>
          <ThemedText type="description" className="text-center leading-8">
            ကိုယ့်roleကို ကြည့်ဖို့ ကတ်ကို ထိပါ။
          </ThemedText>
          <ThemedText type="description" className="text-center leading-8">
            အချိန် ({changeToMMNumber(DEFAULT_GAME_CONFIG.roleRevealTime)})
            စက္ကန့်သာ ရပါမယ်။ ပြန်ကြည့်ခွင့်မရှိပါ။
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
