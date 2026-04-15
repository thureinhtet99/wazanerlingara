import * as React from "react";
import { TextInput, View, type TextInputProps } from "react-native";

import IconInfoCircle from "@/assets/icons/icon-info-circle";
import { ThemeTokens } from "@/constants/theme";
import { cn } from "@/lib/util";

export interface InputProps extends Omit<TextInputProps, "editable"> {
  variant?: "default" | "success" | "error";
  className?: string;
  disabled?: boolean;
}

export const Input = React.forwardRef<
  React.ComponentRef<typeof TextInput>,
  InputProps
>(({ className, variant = "default", disabled, ...props }, ref) => {
  return (
    <View className="relative">
      <TextInput
        ref={ref}
        editable={!disabled}
        placeholderTextColor={
          props.placeholderTextColor ?? ThemeTokens.ui.placeholder
        }
        className={cn(
          "flex h-20 w-full rounded-full text-gray-300 bg-background-400 border-2 px-5",
          variant === "default" && "border-neutral-500",
          variant === "success" && "border-green-500",
          variant === "error" && "border-red-500 pr-12",
          disabled && "opacity-50",
          className,
        )}
        style={{
          fontFamily: ThemeTokens.fontFamily.primary,
          fontSize: ThemeTokens.fontSize.input,
          lineHeight: ThemeTokens.lineHeight.input,
        }}
        {...props}
      />
      {variant === "error" && (
        <View className="absolute right-4 top-1/2 -translate-y-1/2">
          <IconInfoCircle color={ThemeTokens.ui.danger} />
        </View>
      )}
    </View>
  );
});

Input.displayName = "Input";
