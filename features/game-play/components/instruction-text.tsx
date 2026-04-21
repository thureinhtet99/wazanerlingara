import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";

type Props = {
  isLastPlayer: boolean;
  nextPlayerName: string;
};

export default function InstructionText({
  isLastPlayer,
  nextPlayerName,
}: Props) {
  return (
    <View className="gap-3 mx-auto max-w-[400px]">
      {!isLastPlayer ? (
        <ThemedText type="description" className="text-center">
          ပြောပြီးတာနဲ့ နောက်တစ်ယောက်အလှည့် ({nextPlayerName}) အတွက် ခလုတ်ကို
          နှိပ်ပါ။
        </ThemedText>
      ) : null}
    </View>
  );
}
