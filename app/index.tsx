import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";

export default function Index() {
  // const router = useRouter();

  return (
    <View className="flex-1">
      <View className="mb-6 flex-row items-center justify-between border">
        <View>
          <Text className="text-2xl font-bold tracking-wide text-white">
            WAZANERLINGARA
          </Text>
        </View>

        <Button>
          <Text className="text-lg text-white">⚙</Text>
        </Button>
      </View>
    </View>
  );
}
