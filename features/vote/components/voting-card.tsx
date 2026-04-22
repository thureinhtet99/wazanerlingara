import { Image, Pressable } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { cn } from "@/lib/util";
import { PlayerType } from "@/types/index.types";

export default function VotingCard({
  player,
  isSelected,
  handleClick,
}: {
  player: PlayerType;
  isSelected: boolean;
  handleClick: (id: string) => void;
}) {
  return (
    <Pressable
      onPress={() => handleClick(player.id)}
      aria-pressed={isSelected}
      className={cn(
        "w-full border border-white flex flex-col rounded-2xl items-center justify-center pb-2",
        isSelected && "border-4",
      )}
    >
      <Image source={player.image} width={140} height={140} alt={player.name} />

      <ThemedText type="subtitle">{player.name}</ThemedText>
    </Pressable>
  );
}
