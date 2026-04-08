import { router } from "expo-router";
import { Pressable } from "react-native";
import { useAudioSettings } from "../hooks/use-audio-settings";
import { SvgAsset } from "./ui/svg-asset";

export default function BackButton() {
  const { playClickSound } = useAudioSettings();

  return (
    <Pressable
      className="absolute left-0 top-0 h-14 w-14 items-center justify-center"
      onPress={() => {
        playClickSound();
        router.back();
      }}
      accessibilityRole="button"
      accessibilityLabel="Go back"
    >
      <SvgAsset
        source={require("@/assets/svg/back-button.svg")}
        width={38}
        height={38}
      />
    </Pressable>
  );
}
