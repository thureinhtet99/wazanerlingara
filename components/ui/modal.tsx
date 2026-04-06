import { ThemedText } from "@/components/themed-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/util";
import * as React from "react";
import {
  Modal as RNModal,
  View,
  type ModalProps as RNModalProps,
} from "react-native";

export type AppModalProps = {
  visible: boolean;
  variant: "success" | "error";
  title?: string;
  message?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
  modalProps?: Omit<RNModalProps, "visible" | "transparent" | "animationType">;
};

export default function Modal({
  visible,
  variant,
  title,
  message,
  primaryButtonText = "အိုကေ",
  secondaryButtonText,
  onPrimaryPress,
  onSecondaryPress,
  modalProps,
}: AppModalProps) {
  const isSuccess = variant === "success";
  const titleColor = isSuccess ? "#22C55E" : "#FF6B6B";
  const borderColor = isSuccess ? "border-green-300" : "border-red-300";
  //   const icon = isSuccess ? <SuccessIcon /> : <ErrorIcon />;
  const primaryButtonVariant = isSuccess
    ? ("success" as const)
    : ("danger" as const);

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onSecondaryPress || onPrimaryPress}
      {...modalProps}
    >
      <View className="flex-1 items-center justify-center bg-black/60 px-3">
        <View
          className={cn(
            "w-full max-w-[470px] rounded-2xl bg-[#05070D] p-6",
            borderColor,
            "border",
          )}
        >
          <View className="mb-5 flex-row items-center justify-center gap-3">
            {/* {icon} */}
            <ThemedText
              style={{
                color: titleColor,
                fontSize: 30,
                lineHeight: 40,
                fontFamily: "CustomFont",
              }}
            >
              {title}
            </ThemedText>
          </View>

          <ThemedText
            style={{
              color: "#E2E8F0",
              fontSize: 22,
              lineHeight: 40,
              textAlign: "center",
              marginBottom: 24,
              fontFamily: "CustomFont",
            }}
          >
            {message}
          </ThemedText>

          <View className="gap-4">
            <Button
              variant={
                primaryButtonVariant === "success" ? "outline" : "default"
              }
              onPress={onPrimaryPress ?? (() => {})}
            >
              <ThemedText type="subtitle">{primaryButtonText}</ThemedText>
            </Button>
            {!isSuccess && onSecondaryPress && secondaryButtonText && (
              <Button
                variant="default"
                className="bg-zinc-950 border-zinc-300"
                onPress={onSecondaryPress}
              >
                <ThemedText type="subtitle">{secondaryButtonText}</ThemedText>
              </Button>
            )}
          </View>
        </View>
      </View>
    </RNModal>
  );
}
