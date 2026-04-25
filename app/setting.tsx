import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Switch from "@/components/ui/switch";
import { CONFIG } from "@/constants/config";
import { SETTING_ITEMS } from "@/constants/dummy-data";
import { ThemeTokens } from "@/constants/theme";

import { useAudioSettings } from "../hooks/use-audio-settings";

export default function Setting() {
  const router = useRouter();
  const {
    musicEnabled,
    soundEnabled,
    setMusicEnabled,
    setSoundEnabled,
    playClickSound,
  } = useAudioSettings();

  const handleToggle = (id: string, nextValue: boolean) => {
    if (id === "music") {
      setMusicEnabled(nextValue);
    }

    if (id === "sound") {
      setSoundEnabled(nextValue);
    }
  };

  const renderSettingIcon = (icon: {
    family: "Ionicons" | "MaterialCommunityIcons";
    name: string;
  }) => {
    if (icon.family === "MaterialCommunityIcons") {
      return (
        <MaterialCommunityIcons
          name={icon.name as any}
          size={36}
          color={ThemeTokens.ui.white}
        />
      );
    }

    return (
      <Ionicons
        name={icon.name as any}
        size={36}
        color={ThemeTokens.ui.white}
      />
    );
  };

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">Setting</ThemedText>
      </View>

      <View className="flex-1 gap-6">
        {SETTING_ITEMS.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => {
              if (!item.hasToggle) {
                playClickSound();
                router.push(item.route);
              }
            }}
            className="flex-row items-center justify-between rounded-2xl border border-white px-4 py-8 bg-background-500/80"
            disabled={item.hasToggle}
          >
            <View className="flex-row items-center gap-3 pr-3 max-w-xs">
              {renderSettingIcon(item.icon)}
              <ThemedText type="subtitle">{item.label}</ThemedText>
            </View>

            {item.hasToggle && (
              <Switch
                checked={item.id === "music" ? musicEnabled : soundEnabled}
                onChange={(nextValue) => handleToggle(item.id, nextValue)}
              />
            )}
          </Pressable>
        ))}
      </View>

      <ThemedText type="subtitle" className="mt-auto text-center">
        {`v ${CONFIG.VERSION}`}
      </ThemedText>
    </ThemedView>
  );
}
