import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "../themed-view";

export default function MainLayout({ children }: { children: ReactNode }) {
  // const { resetGameConfig } = useGameConfig();
  // resetGameConfig();

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1 overflow-x-hidden">
        <ThemedView className="flex-1 px-2 pt-4 pb-6">{children}</ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}
