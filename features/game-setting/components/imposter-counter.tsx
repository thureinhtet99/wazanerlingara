import { ThemedText } from "@/components/themed-text";
import { SvgAsset } from "@/components/ui/svg-asset";
import { changeToMMNumber } from "@/lib/change-to-mm-number";
import { Pressable, View } from "react-native";

const ImposterCounter = () => {
  //   const { config, updateGameConfig } = useGameConfigStore();
  //   const imposterCount = config?.gameSetting.imposterCount || 0;
  const imposterCount = 1;

  const handleImposterCounter = (type: "increase" | "decrease") => {
    console.log("type", type);

    // if (!config) return;
    // if (type === "increase") {
    //   updateGameConfig({
    //     gameSetting: {
    //       ...config?.gameSetting,
    //       imposterCount: Math.min(
    //         config?.players.length - 1,
    //         imposterCount + 1,
    //       ),
    //     },
    //   });
    // } else {
    //   updateGameConfig({
    //     gameSetting: {
    //       ...config?.gameSetting,
    //       imposterCount: Math.max(1, imposterCount - 1),
    //     },
    //   });
    // }
  };

  return (
    <View className="flex-row items-center justify-between rounded-2xl border border-white px-4 py-6">
      <View className="flex-row items-center gap-2">
        <SvgAsset
          source={require("@/assets/svg/people-fill.svg")}
          width={30}
          height={30}
        />
        <ThemedText type="subtitle">Imposter အရေအတွက်</ThemedText>
      </View>
      <View className="flex-1 flex-row items-center justify-end gap-2">
        <Pressable
          onPress={() => handleImposterCounter("decrease")}
          className="bg-white rounded-full w-6 h-6 flex items-center justify-center active:opacity-70"
        >
          <ThemedText
            type="defaultSemiBold"
            className="text-black"
            style={{ fontSize: 18, lineHeight: 22 }}
          >
            -
          </ThemedText>
        </Pressable>
        <ThemedText type="subtitle">
          {changeToMMNumber(imposterCount)}
        </ThemedText>
        <Pressable
          onPress={() => handleImposterCounter("increase")}
          className="bg-white rounded-full w-6 h-6 flex items-center justify-center active:opacity-70"
        >
          <ThemedText
            type="defaultSemiBold"
            className="text-black"
            style={{ fontSize: 18, lineHeight: 22 }}
          >
            +
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
};

export default ImposterCounter;
