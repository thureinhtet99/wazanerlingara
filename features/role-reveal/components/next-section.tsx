import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Button } from "@/components/ui/button";
import InstructionText from "@/features/role-reveal/components/instruction-text";

type Props = {
  currentPlayerIndex: number;
  playersLength: number;
  nextPlayerName: string;
  canProceedNext: boolean;
  handleClickNext: () => void;
};

export default function NextSection({
  currentPlayerIndex,
  playersLength,
  nextPlayerName,
  canProceedNext,
  handleClickNext,
}: Props) {
  const isLastPlayer = currentPlayerIndex >= playersLength - 1;
  const buttonLabel = !isLastPlayer ? "နောက်တစ်ယောက်" : "ဂိမ်းစဆော့မယ်";

  return (
    <View className="mx-auto gap-8 w-full">
      <InstructionText canProceedNext={canProceedNext} />

      {!isLastPlayer && canProceedNext ? (
        <ThemedText type="subtitle" className="text-center">
          နောက်တစ်ယောက် - {nextPlayerName}
        </ThemedText>
      ) : null}

      <Button
        disabled={!canProceedNext}
        onPress={!isLastPlayer ? handleClickNext : undefined}
      >
        <ThemedText type="subtitle">{buttonLabel}</ThemedText>
      </Button>
    </View>
  );
}
