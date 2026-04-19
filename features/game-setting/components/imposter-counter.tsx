import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { SvgAsset } from "@/components/ui/svg-asset";
import { changeToMMNumber } from "@/lib/change-to-mm-number";

const ImposterCounter = () => {
  const imposterCount = 1;

  return (
    <View className="flex-row items-center justify-between rounded-2xl border border-white px-4 py-8 bg-neutral-500/10">
      <View className="flex-row items-center gap-2">
        <SvgAsset
          source={require("@/assets/svg/people-fill.svg")}
          width={30}
          height={30}
        />
        <ThemedText type="description">Imposter အရေအတွက်</ThemedText>
      </View>
      <View className="flex-1 flex-row items-center justify-end pe-6">
        <ThemedText type="subtitle">
          {changeToMMNumber(imposterCount)}
        </ThemedText>
      </View>
    </View>
  );
};

export default ImposterCounter;
