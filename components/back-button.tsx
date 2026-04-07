import { router } from "expo-router";
import { Pressable } from "react-native";
import { SvgAsset } from "./ui/svg-asset";

export default function BackButton() {
  return (
    <Pressable
      className="absolute left-0 top-0 h-12 w-12 items-center justify-center rounded-xl"
      onPress={() => router.back()}
      accessibilityRole="button"
      accessibilityLabel="Go back"
    >
      <SvgAsset
        source={require("@/assets/svg/back-button.svg")}
        width={37}
        height={37}
      />
    </Pressable>
  );
}
