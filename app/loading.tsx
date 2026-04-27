import { useEffect, useState } from "react";
import { default as Animated } from "react-native-reanimated";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function Loading() {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 6);
    }, 350);

    return () => clearInterval(id);
  }, []);

  const dots = ".".repeat(dotCount);

  return (
    <ThemedView className="flex-1 items-center justify-center">
      <Animated.View>
        <ThemedText type="description" className="text-center">
          Loading {dots}
        </ThemedText>
      </Animated.View>
    </ThemedView>
  );
}
