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

export default function Vote() {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const { playClickSound } = useAudioSettings();
  const { config } = useGameConfig();
  const players = config.players;

  const handleClick = (id: string) => {
    setSelectedPlayerId(id);
    playClickSound();
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const handleVote = () => {
    if (!selectedPlayerId) {
      return;
    }

    setShowConfirmModal(true);
  };

  const handleConfirmVote = () => {
    if (!selectedPlayerId) {
      return;
    }

    router.replace({
      pathname: CONFIG.VOTE_RESULT,
      params: {
        votedPlayerId: selectedPlayerId,
      },
    });
  };

  return (
    <ThemedView className="flex-1">
      <View className="gap-6 items-center py-8">
        <ThemedText type="title">ဘယ်သူက Imposterလဲ</ThemedText>
        <ThemedText type="description">
          သံသယအရှိဆုံး တစ်ယောက်ကို ရွေးပါ။
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
                isSelected={selectedPlayerId === player.id}
                handleClick={handleClick}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="mt-auto">
        <Button onPress={handleVote} disabled={!selectedPlayerId}>
          <ThemedText type="subtitle">မဲပေးမယ်</ThemedText>
        </Button>
      </View>

      <Modal
        visible={showConfirmModal}
        variant="error"
        title="ဒီတစ်ယောက်က Imposter ဆိုတာ သေချာပြီလား"
        message="မဲပေးပြီးသွားရင် ပြန်ပြင်လို့ မရတော့ပါဘူး။"
        primaryButtonText="သေချာတယ်"
        secondaryButtonText="ပြန်ရွေးမယ်"
        onPrimaryPress={handleConfirmVote}
        onSecondaryPress={closeConfirmModal}
      />
    </ThemedView>
  );
}
