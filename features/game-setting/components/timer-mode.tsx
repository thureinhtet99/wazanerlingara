import { useState } from "react";
import { Pressable, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { SvgAsset } from "@/components/ui/svg-asset";
import { useGameConfig } from "@/hooks/use-game-config";

export default function TimerMode() {
  const { config, updateGameConfig } = useGameConfig();
  const [timerMode, setTimerMode] = useState<"turn" | "duration">("duration");
  const [pressedButton, setPressedButton] = useState<
    "increase" | "decrease" | null
  >(null);

  const isTurn = timerMode === "turn";
  const turnTimer = config?.gameSetting.turnTimer || 5;
  const durationTimer = config?.gameSetting.durationTimer || 120;

  const timerValue = isTurn ? turnTimer : durationTimer;
  const min = isTurn ? 5 : 60;
  const max = isTurn ? 60 : 600;
  const step = isTurn ? 5 : 60;
  const progressPercent = ((timerValue - min) / (max - min)) * 100;

  const setTimer = (value: number) => {
    const nextValue = Math.min(max, Math.max(min, value));
    if (!config) return;

    if (isTurn) {
      updateGameConfig({
        gameSetting: {
          ...config.gameSetting,
          turnTimer: nextValue,
        },
      });
      return;
    }

    updateGameConfig({
      gameSetting: {
        ...config.gameSetting,
        durationTimer: nextValue,
      },
    });
  };

  const isPressed = (type: "increase" | "decrease") => pressedButton === type;

  const increaseTimer = () => {
    if (timerValue < max) setTimer(timerValue + step);
  };

  const decreaseTimer = () => {
    if (timerValue > min) setTimer(timerValue - step);
  };

  const formatTimerValue = () => {
    if (isTurn) {
      return `00:${String(timerValue).padStart(2, "0")}`;
    }

    return `${String(Math.floor(timerValue / 60)).padStart(2, "0")}:${String(timerValue % 60).padStart(2, "0")}`;
  };

  return (
    <View className="rounded-3xl border border-white p-4 bg-neutral-500/10">
      <View className="mb-6 flex-row items-center gap-2">
        <SvgAsset
          source={require("@/assets/svg/timer.svg")}
          width={30}
          height={30}
        />
        <ThemedText type="description">Timing Modeကို ရွေးချယ်ပါ</ThemedText>
      </View>

      <View className="mb-6 flex-row items-center gap-1 rounded-2xl border border-white p-1">
        <Pressable
          onPress={() => setTimerMode("turn")}
          className={`flex-1 px-3 py-4 flex-row items-center justify-center gap-1 rounded-2xl ${isTurn ? "bg-white" : "bg-transparent"}`}
        >
          <SvgAsset
            source={require("@/assets/svg/profile.svg")}
            width={22}
            height={22}
            color={isTurn ? "#000000" : "#FFFFFF"}
          />
          <ThemedText
            type="description"
            className={isTurn ? "text-black" : "text-white"}
          >
            Turn Timer
          </ThemedText>
        </Pressable>

        <Pressable
          onPress={() => setTimerMode("duration")}
          className={`flex-1 px-3 py-4 flex-row items-center justify-center gap-1 rounded-2xl ${!isTurn ? "bg-white" : "bg-transparent"}`}
        >
          <SvgAsset
            source={require("@/assets/svg/people-fill.svg")}
            width={22}
            height={22}
            color={!isTurn ? "#111111" : "#FFFFFF"}
          />
          <ThemedText
            type="description"
            className={!isTurn ? "text-black" : "text-white"}
          >
            Duration Timer
          </ThemedText>
        </Pressable>
      </View>

      <View className="items-center">
        <ThemedText type="title">{formatTimerValue()}</ThemedText>
        <ThemedText type="description" className="mb-6">
          {isTurn ? "seconds per turn" : "seconds per round"}
        </ThemedText>

        <View className="mb-6 w-full flex-row items-start gap-4">
          <Pressable
            onPress={decreaseTimer}
            onPressIn={() => setPressedButton("decrease")}
            onPressOut={() => setPressedButton(null)}
            className={`rounded-full w-8 h-8 flex items-center justify-center ${isPressed("decrease") ? "bg-red-500" : "bg-white"}`}
          >
            <ThemedText
              type="defaultSemiBold"
              className="text-black"
              style={{ fontSize: 30, lineHeight: 28 }}
            >
              −
            </ThemedText>
          </Pressable>

          <View className="flex-1">
            <View className="relative h-4 justify-center">
              <View className="h-1.5 w-full rounded-full bg-[#9E9E9E] border-b border-white" />
              <View
                className="absolute left-0 h-1 rounded-full bg-[#E15256]"
                style={{ width: `${progressPercent}%` }}
              />
              <View
                className="absolute h-6 w-6 rounded-full bg-white"
                style={{ left: `${progressPercent}%`, marginLeft: -8 }}
              />
            </View>

            <View className="mt-1 flex-row justify-between">
              <ThemedText type="default">
                {isTurn ? `${min}s` : `${Math.floor(min / 60)}min`}
              </ThemedText>
              <ThemedText type="default">
                {isTurn ? `${max}s` : `${Math.floor(max / 60)}mins`}
              </ThemedText>
            </View>
          </View>

          <Pressable
            onPress={increaseTimer}
            onPressIn={() => setPressedButton("increase")}
            onPressOut={() => setPressedButton(null)}
            className={`rounded-full w-8 h-8 flex items-center justify-center ${isPressed("increase") ? "bg-red-500" : "bg-white"}`}
          >
            <ThemedText
              type="defaultSemiBold"
              className="text-black"
              style={{ fontSize: 30, lineHeight: 28 }}
            >
              +
            </ThemedText>
          </Pressable>
        </View>

        <View className="flex-row items-start my-4 gap-2">
          <SvgAsset
            source={require("@/assets/svg/info-alert.svg")}
            width={24}
            height={24}
          />
          <ThemedText type="default" className="flex-1 text-white">
            {isTurn
              ? "ကစားသမား တစ်ယောက်ချင်းစီအတွက် (ဥပမာ- စက္ကန့်၃၀စီ) ညီတူညီမျှ အချိန်ရပါမယ်။ ကိုယ့်အလှည့်ပြီးရင် နောက်တစ်ယောက်အတွက် Timerအသစ် ပြန်စပါမယ်။"
              : "ကစားပွဲတစ်ခုလုံးအတွက် အချိန်တစ်ခုပဲ ရှိပါမယ် (ဥပမာ - ၃မိနစ်)။ သတ်မှတ်ထားတဲ့ အချိန်အတွင်းမှာပဲ အားလုံး တလှည့်စီ ကစားရမှာဖြစ်ပြီး၊ အချင်းချင်း ဆွေးနွေးငြင်းခုံချင်တယ်ဆိုရင်တော့ Timer ကိုခေတ္တရပ် (Pause)နိုင်ပါတယ်။"}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}
