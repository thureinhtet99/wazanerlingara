import { Image, Pressable, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { SvgAsset } from "@/components/ui/svg-asset";
import { svg } from "@/constants/icons";
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

  return (
    <View
      key={currentPlayer.id}
      style={{ elevation: 24 }}
      className={`flex-1 items-center justify-center ${shouldDimCard ? "opacity-55" : ""}`}
    >
      <View className="flex-1 rounded-3xl border border-white p-4 w-[340px] ">
        {!revealed ? (
          <Pressable
            tabIndex={0}
            disabled={!canReveal}
            onPress={() => {
              handleClickCard();
              handleReveal();
            }}
            className={`flex-1 items-center rounded-3xl justify-center bg-white/20 ${showBlur ? "opacity-95" : "opacity-100"}`}
          >
            <SvgAsset
              source={require("@/assets/svg/view-eye.svg")}
              width={80}
              height={80}
            />
          </Pressable>
        ) : (
          <View className="flex-1 flex-col gap-16 items-center justify-center rounded-3xl bg-black px-4">
            <Image
              source={
                currentPlayer.id === imposterId
                  ? require("@/assets/images/avatar/imposter.png")
                  : currentPlayer.imageId || revealImageId || svg.avatar1
              }
              width={250}
              height={300}
            />

            <ThemedText
              type="subtitle"
              className={`text-center ${
                currentPlayer.id === imposterId ? "text-red-500" : "text-white"
              }`}
            >
              {currentPlayer.id === imposterId
                ? "Imposter"
                : currentPlayer.name}
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
