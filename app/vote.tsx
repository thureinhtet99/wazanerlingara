import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { CONFIG } from "@/constants/config";
import VotingCard from "@/features/vote/components/voting-card";
import { useAudioSettings } from "@/hooks/use-audio-settings";
import { useGameConfig } from "@/hooks/use-game-config";
import { getAllowedImposterCount, serializeIds } from "@/lib/imposter";

export default function Vote() {
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<string[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const { playClickSound } = useAudioSettings();
  const { config } = useGameConfig();
  const players = config.players;

  const requiredSelectionCount = getAllowedImposterCount(
    players.length,
    config.gameSetting.imposterCount,
  );
  const isDoubleVoteMode = requiredSelectionCount === 2;

  const handleClick = (id: string) => {
    if (!isDoubleVoteMode) {
      setSelectedPlayerIds([id]);
      playClickSound();
      return;
    }

    setSelectedPlayerIds((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      if (current.length >= requiredSelectionCount) {
        return current;
      }

      return [...current, id];
    });

    playClickSound();
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const handleVote = () => {
    if (selectedPlayerIds.length !== requiredSelectionCount) {
      return;
    }

    setShowConfirmModal(true);
  };

  const handleConfirmVote = () => {
    if (selectedPlayerIds.length !== requiredSelectionCount) {
      return;
    }

    router.replace({
      pathname: CONFIG.VOTE_TRANSITION,
      params: {
        votedPlayerIds: serializeIds(selectedPlayerIds),
      },
    });
  };

  return (
    <ThemedView className="flex-1">
      <View className="gap-6 items-center py-8">
        <ThemedText type="title">ဘယ်သူက Imposterလဲ</ThemedText>
        <ThemedText type="description">
          {isDoubleVoteMode
            ? "သံသယအရှိဆုံး နှစ်ယောက်ကို ရွေးပါ။"
            : "သံသယအရှိဆုံး တစ်ယောက်ကို ရွေးပါ။"}
        </ThemedText>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between gap-4">
          {players.map((player) => (
            <View key={player.id} className="w-[48%]">
              <VotingCard
                player={player}
                isSelected={selectedPlayerIds.includes(player.id)}
                handleClick={handleClick}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="mt-auto">
        <Button
          onPress={handleVote}
          disabled={selectedPlayerIds.length !== requiredSelectionCount}
        >
          <ThemedText type="subtitle">မဲပေးမယ်</ThemedText>
        </Button>
      </View>

      <Modal
        visible={showConfirmModal}
        variant="error"
        title={
          isDoubleVoteMode
            ? "ဒီနှစ်ယောက်က Imposter ဆိုတာ သေချာပြီလား"
            : "ဒီတစ်ယောက်က Imposter ဆိုတာ သေချာပြီလား"
        }
        message="မဲပေးပြီးသွားရင် ပြန်ပြင်လို့ မရတော့ပါဘူး။"
        primaryButtonText="သေချာတယ်"
        secondaryButtonText="ပြန်ရွေးမယ်"
        onPrimaryPress={handleConfirmVote}
        onSecondaryPress={closeConfirmModal}
      />
    </ThemedView>
  );
}
