import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SvgAsset } from "@/components/ui/svg-asset";
import Switch from "@/components/ui/switch";
import { CONFIG } from "@/constants/config";
import { Href, useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { useAudioSettings } from "../hooks/use-audio-settings";

type SettingType =
  | {
      id: string;
      label: string;
      icon: any;
      hasToggle: true;
      route?: never;
    }
  | {
      id: string;
      label: string;
      icon: any;
      hasToggle?: false;
      route: Href;
    };

const SETTING_ITEMS: SettingType[] = [
  {
    id: "music",
    label: "နောက်ခံသီချင်း",
    icon: require("@/assets/svg/music-icon.svg"),
    hasToggle: true,
  },
  {
    id: "sound",
    label: "အသံ",
    icon: require("@/assets/svg/speaker-icon.svg"),
    hasToggle: true,
  },
  {
    id: "privacy",
    label: "ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု",
    icon: require("@/assets/svg/incognito-icon.svg"),
    route: "/privacy",
  },
  {
    id: "chat",
    label: "ဆက်သွယ်ရန်",
    icon: require("@/assets/svg/chat-icon.svg"),
    route: "/contact",
  },
];

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

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">Setting</ThemedText>
      </View>

      <View className="flex-1 gap-4">
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
              <SvgAsset source={item.icon} width={30} height={30} />
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
