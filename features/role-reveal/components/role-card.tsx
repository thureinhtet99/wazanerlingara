import { Image, Pressable, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { SvgAsset } from "@/components/ui/svg-asset";
import { SvgKey, svg } from "@/constants/icons";
import { RoleCardType } from "@/types/index.types";

export default function RoleCard({
  currentPlayer,
  revealContent,
  revealImageId,
  imposterId,
  imposterCanGetHint,
  hint,
  showBlur,
  revealed,
  confirmed,
  timeLeft,
  handleClickCard,
  handleReveal,
}: RoleCardType) {
  const shouldDimCard = timeLeft <= 0 || confirmed;
  const canReveal = timeLeft > 0 && !confirmed;
  const avatarKey = currentPlayer?.imageId as SvgKey | null;
  const playerAvatarSource =
    avatarKey && avatarKey in svg ? svg[avatarKey] : svg.avatar1;

  return (
    <View
      key={currentPlayer.id}
      className={`flex-1 items-center justify-center  max-h-[480px] ${shouldDimCard ? "opacity-55" : ""}`}
    >
      <View
        className="flex-1 w-[340px] rounded-3xl border border-white/10 bg-black p-2.5"
        style={{ shadowColor: "white", elevation: 6 }}
      >
        {!revealed ? (
          <Pressable
            tabIndex={0}
            disabled={!canReveal}
            onPress={() => {
              if (showBlur) {
                handleReveal();
                return;
              }

              handleClickCard();
            }}
            className="relative flex-1 items-center justify-between rounded-3xl px-4 py-10 border border-white/80"
          >
            <View className="relative h-[330px] w-full max-w-[290px] items-center justify-center overflow-hidden rounded-2xl bg-white/5">
              <Image
                source={playerAvatarSource}
                width={290}
                height={330}
                resizeMode="contain"
                blurRadius={showBlur ? 16 : 0}
              />

              {showBlur ? (
                <View className="absolute inset-0 items-center justify-center gap-3 bg-black/85">
                  <SvgAsset
                    source={require("@/assets/svg/view-eye.svg")}
                    width={80}
                    height={80}
                  />
                </View>
              ) : null}
            </View>

            {!showBlur && (
              <ThemedText type="title" className="text-center">
                {currentPlayer.name}
              </ThemedText>
            )}
          </Pressable>
        ) : (
          <View className="flex-1 flex-col items-center justify-center gap-8 rounded-3xl bg-black px-4">
            <Image
              source={
                currentPlayer.id === imposterId
                  ? require("@/assets/images/avatar/imposter.png")
                  : revealImageId || playerAvatarSource
              }
              width={250}
              height={300}
              resizeMode="contain"
            />

            <ThemedText
              type="subtitle"
              className={`text-center ${
                currentPlayer.id === imposterId ? "text-red-500" : "text-white"
              }`}
            >
              {currentPlayer.id === imposterId
                ? "Imposter"
                : revealContent || "Secret"}
            </ThemedText>

            {currentPlayer.id === imposterId && imposterCanGetHint && hint ? (
              <ThemedText className="mt-3 text-center text-[16px] text-white/85">
                hint - {hint}
              </ThemedText>
            ) : null}
          </View>
        )}
      </View>
    </View>
  );
}
