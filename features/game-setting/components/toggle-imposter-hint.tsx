import { ThemedText } from "@/components/themed-text";
import { SvgAsset } from "@/components/ui/svg-asset";
import Switch from "@/components/ui/switch";
import { useState } from "react";
import { View } from "react-native";

export default function ToggleImposterHint() {
  const [showImposterHint, setShowImposterHint] = useState(false);

  return (
    <View className="flex-row items-center justify-between rounded-2xl border border-white px-4 py-6">
      <View className="flex-row items-center gap-2">
        <SvgAsset
          source={require("@/assets/svg/light-bulb.svg")}
          width={20}
          height={20}
        />
        <ThemedText type="subtitle">Imposterကို အကူအညီပေးမလား</ThemedText>
      </View>
      <Switch
        checked={showImposterHint}
        onChange={setShowImposterHint}
        onLabel="On"
        offLabel="Off"
      />
    </View>
  );
}
