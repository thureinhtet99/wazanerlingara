import { Text, View } from "react-native";

export default function Index() {
  return (
    // <ThemedView style={styles.content}>{children}</ThemedView>

    <View className="flex-1 items-center justify-center ">
      <Text className="text-xl font-bold text-white">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
