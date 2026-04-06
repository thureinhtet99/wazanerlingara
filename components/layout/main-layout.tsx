import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../themed-view";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1 overflow-x-hidden">
        <ThemedView className="flex-1 px-3 py-4">{children}</ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}
