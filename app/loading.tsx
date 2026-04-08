import { ThemedText } from "../components/themed-text";
import { ThemedView } from "../components/themed-view";

export default function Loading() {
  return (
    <ThemedView className="absolute inset-1 items-center justify-center">
      <ThemedText>Loading....</ThemedText>
    </ThemedView>
  );
}
