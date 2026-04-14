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
  const borderColor = isSuccess ? "border-green-500" : "border-red-500";

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
          <View className="mb-6 flex-col items-center justify-center gap-3">
            <ThemedText type="title">{title}</ThemedText>
            <ThemedText type="description">{message}</ThemedText>
          </View>

          <View className="gap-4">
            <Button variant="default" onPress={onPrimaryPress ?? (() => {})}>
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
