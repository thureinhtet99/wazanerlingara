import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Button } from "@/components/ui/button";
import InstructionText from "@/features/role-reveal/components/instruction-text";

interface Props {
  currentPlayerIndex: number;
  playersLength: number;
  nextPlayerName: string;
  confirmed: boolean;
  revealed: boolean;
  timeLeft: number;
  handleConfirm: () => void;
  handleClickNext: () => void;
}

export default function NextSection({
  currentPlayerIndex,
  playersLength,
  nextPlayerName,
  confirmed,
  revealed,
  timeLeft,
  handleConfirm,
  handleClickNext,
}: Props) {
  const isLastPlayer = currentPlayerIndex >= playersLength - 1;

  return (
    <View className="mx-auto mt-8 w-full">
      <InstructionText confirmed={confirmed} />

      {!isLastPlayer && (confirmed || timeLeft <= 0) ? (
        <ThemedText type="subtitle" className="mb-2 mt-4 text-center">
          နောက်တစ်ယောက် - {nextPlayerName}
        </ThemedText>
      ) : null}

      <View className="mt-4 w-full">
        {revealed && !confirmed ? (
          <Button onPress={handleConfirm} className="h-16 bg-primary-500">
            <ThemedText type="subtitle" className="text-[22px]">
              ရပြီ
            </ThemedText>
          </Button>
        ) : (
          <Button
            disabled={!confirmed}
            onPress={!isLastPlayer ? handleClickNext : undefined}
            className="h-16 bg-primary-300"
          >
            <ThemedText type="subtitle" className="text-[22px] text-white/90">
              {!isLastPlayer ? "နောက်တစ်ယောက်" : "ဂိမ်းစဆော့မယ်"}
            </ThemedText>
          </Button>
        )}
      </View>
    </View>
  );
}
