import * as React from "react";
import { TextInput, type TextInputProps, View } from "react-native";

import { ThemeTokens } from "@/constants/theme";
import { cn } from "@/lib/util";

export interface TextAreaProps extends Omit<TextInputProps, "editable"> {
  variant?: "default" | "success" | "error";
  className?: string;
  disabled?: boolean;
  resizable?: boolean;
  minHeight?: number;
}

export const Textarea = React.forwardRef<
  React.ComponentRef<typeof TextInput>,
  TextAreaProps
>(
  (
    {
      className,
      variant = "default",
      disabled,
      multiline,
      resizable = true,
      minHeight = 160,
      onContentSizeChange,
      style,
      ...props
    },
    ref,
  ) => {
    const [height, setHeight] = React.useState(minHeight);

    React.useEffect(() => {
      setHeight(minHeight);
    }, [minHeight]);

    const handleContentSizeChange: TextInputProps["onContentSizeChange"] = (
      event,
    ) => {
      onContentSizeChange?.(event);
      if (!resizable) return;

      const nextHeight = Math.max(
        minHeight,
        Math.ceil(event.nativeEvent.contentSize.height),
      );

      if (nextHeight !== height) {
        setHeight(nextHeight);
      }
    };

    return (
      <View className="relative w-full">
        <TextInput
          ref={ref}
          editable={!disabled}
          multiline={multiline ?? true}
          textAlignVertical="top"
          placeholderTextColor={
            props.placeholderTextColor ?? ThemeTokens.ui.placeholder
          }
          className={cn(
            "flex min-h-[120px] w-full rounded-3xl border-2 border-white bg-background-300 p-3 pr-8 text-gray-300",
            variant === "error" && "pr-12",
            disabled && "opacity-50",
            className,
          )}
          onContentSizeChange={handleContentSizeChange}
          style={[
            {
              fontFamily: ThemeTokens.fontFamily.primary,
              fontSize: ThemeTokens.fontSize.input,
              lineHeight: ThemeTokens.lineHeight.input,
            },
            resizable ? { minHeight, height } : { minHeight },
            style,
          ]}
          {...props}
        />
      </View>
    );
  },
);

Textarea.displayName = "Textarea";
