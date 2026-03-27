import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../themed-view";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView className="flex-1 text-white overflow-x-hidden">
      <ThemedView className="flex-1 p-4">{children}</ThemedView>
    </SafeAreaView>
  );
}
