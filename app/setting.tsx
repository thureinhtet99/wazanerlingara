import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SvgAsset } from "@/components/ui/svg-asset";
import Switch from "@/components/ui/switch";
import { CONFIG } from "@/constants/config";
import { Href, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

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

const settingItems: SettingType[] = [
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
  const [toggleState, setToggleState] = useState<Record<string, boolean>>(() =>
    settingItems.reduce<Record<string, boolean>>((acc, item) => {
      if (item.hasToggle) {
        acc[item.id] = false;
      }
      return acc;
    }, {}),
  );

  const handleToggle = (id: string) => {
    setToggleState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">Setting</ThemedText>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="gap-3">
        {settingItems.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => {
              if (!item.hasToggle) router.push(item.route);
            }}
            className="flex-row items-center justify-between rounded-2xl border border-white px-4 py-6"
            disabled={item.hasToggle}
          >
            <View className="flex-row items-center gap-3 pr-3 max-w-xs">
              <SvgAsset source={item.icon} width={22} height={22} />
              <ThemedText type="subtitle">{item.label}</ThemedText>
            </View>

            {item.hasToggle && (
              <Switch
                checked={Boolean(toggleState[item.id])}
                onChange={() => handleToggle(item.id)}
              />
            )}
          </Pressable>
        ))}
      </ScrollView>

      <Text className="mt-auto text-center text-base text-white pb-4">
        {`v ${CONFIG.VERSION}`}
      </Text>
    </ThemedView>
  );
}
