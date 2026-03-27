import { SvgAsset } from "@/components/ui/svg-asset";
import Switch from "@/components/ui/switch";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

type SettingItem = {
  id: string;
  label: string;
  icon: number;
  hasToggle?: boolean;
};

const settingItems: SettingItem[] = [
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
  },
  {
    id: "chat",
    label: "ဆက်သွယ်ရန်",
    icon: require("@/assets/svg/chat-icon.svg"),
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
    <View className="flex-1 bg-black">
      <View className="mb-6 mt-1 flex-row items-center justify-center">
        <Pressable
          className="absolute left-0 h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/5"
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <SvgAsset
            source={require("@/assets/svg/back-button.svg")}
            width={20}
            height={20}
          />
        </Pressable>

        <Text className="font-example text-5xl text-white">Setting</Text>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="gap-3 pb-6">
        {settingItems.map((item) => (
          <Pressable
            key={item.id}
            className="flex-row items-center justify-between rounded-[18px] border border-white bg-neutral-900 px-4 py-4"
            disabled={item.hasToggle}
          >
            <View className="flex-row items-center gap-3 pr-3">
              <SvgAsset source={item.icon} width={22} height={22} />
              <Text className="flex-1 text-base text-white">{item.label}</Text>
            </View>

            {item.hasToggle ? (
              <Switch
                checked={Boolean(toggleState[item.id])}
                onChange={() => handleToggle(item.id)}
                className="h-8 w-14"
                onLabel="On"
                offLabel="Off"
              />
            ) : (
              <Text className="text-lg text-neutral-400">›</Text>
            )}
          </Pressable>
        ))}

        <Text className="mt-20 text-center text-base text-white/80">
          v 0.0.1
        </Text>
      </ScrollView>
    </View>
  );
}
