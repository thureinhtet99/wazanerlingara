import { Image, Pressable } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ImageKey, images } from "@/constants/icons";
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
  const imageKey = player.imageId as ImageKey;
  const playerAvatarSource = images[imageKey] ?? images.avatar1;

  return (
    <Pressable
      onPress={() => handleClick(player.id)}
      aria-pressed={isSelected}
      className={cn(
        "w-full border border-white flex flex-col rounded-2xl items-center justify-center overflow-hidden gap-2 py-4",
        isSelected && "border-4",
      )}
    >
      <Image
        source={playerAvatarSource}
        width={140}
        height={140}
        alt={player.name}
        resizeMode="contain"
      />

      <ThemedText type="description">{player.name}</ThemedText>
    </Pressable>
  );
}
