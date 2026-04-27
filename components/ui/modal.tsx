import * as React from "react";
import {
  Modal as RNModal,
  View,
  type ModalProps as RNModalProps,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Button } from "@/components/ui/button";
import { ThemeTokens } from "@/constants/theme";
import { cn } from "@/lib/util";

export type AppModalProps = {
  visible: boolean;
  variant?: "success" | "error" | (string & {});
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
  const isError = variant === "error";
  const borderColor = isSuccess ? "border-green-500" : "border-red-500";
  const titleColor = isSuccess
    ? ThemeTokens.palette.success[500]
    : isError
      ? ThemeTokens.ui.danger
      : ThemeTokens.ui.white;

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onSecondaryPress || onPrimaryPress}
      {...modalProps}
    >
      <View className="flex-1 items-center justify-center bg-black/80 px-2">
        <View
          className={cn("w-full rounded-3xl py-6 px-4", "border", borderColor)}
          style={{ backgroundColor: ThemeTokens.ui.modalBackground }}
        >
          <View className="mb-6 flex-col items-center justify-center gap-2">
            <ThemedText
              type="title"
              className="text-center max-w-[380px]"
              style={{ color: titleColor }}
            >
              {title}
            </ThemedText>
            <ThemedText
              type="description"
              className="text-center max-w-[360px]"
            >
              {message}
            </ThemedText>
          </View>

          <View className="gap-4">
            <Button variant="default" onPress={onPrimaryPress}>
              <ThemedText type="subtitle">{primaryButtonText}</ThemedText>
            </Button>
            {!isSuccess && onSecondaryPress && secondaryButtonText && (
              <Button variant="outline" onPress={onSecondaryPress}>
                <ThemedText type="subtitle">{secondaryButtonText}</ThemedText>
              </Button>
            )}
          </View>
        </View>
      </View>
    </RNModal>
  );
}
