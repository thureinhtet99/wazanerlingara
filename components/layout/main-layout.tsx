import { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView className="flex-1 text-white overflow-x-hidden">
      <View className="flex-1">{children}</View>
    </SafeAreaView>
  );
}
