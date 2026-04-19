import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function GamePlay() {
  return (
    <ThemedView className="flex-1 items-center justify-center gap-16">
      <ThemedText type="subtitle" className="text-center">
        Game play
      </ThemedText>
    </ThemedView>
  );
}
