import { cn } from "@/lib/util";
import { forwardRef, type ElementRef, type ReactNode } from "react";
import { Pressable, Text, View, type PressableProps } from "react-native";

export interface ButtonProps extends PressableProps {
  variant?: "default" | "outline";
  className?: string;
  textClassName?: string;
  children?: ReactNode;
}

export const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  (
    { className, textClassName, variant = "default", children, ...props },
    ref,
  ) => {
    const isTextOnly =
      typeof children === "string" || typeof children === "number";

    return (
      <Pressable
        ref={ref}
        className={cn(
          "relative flex h-16 min-w-24 w-full items-center justify-center overflow-hidden rounded-full px-4 py-4 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.64),inset_4px_4px_8px_rgba(255,255,255,0.64)] duration-300 active:scale-95",
          variant === "default" &&
            "bg-primary-500 active:bg-primary-400 disabled:bg-primary-200",
          variant === "outline" &&
            "bg-transparent active:bg-background-200 disabled:bg-background-400",
          props.disabled && "pointer-events-none opacity-60",
          className,
        )}
        {...props}
      >
        <View className="absolute left-4 top-1">
          <View className="h-4 w-6 -rotate-45 rounded-full bg-white" />
          <View className="-mt-1 ml-1 h-2 w-2 rounded-full bg-[#E8E8E8]" />
        </View>

        <View className="absolute bottom-1 right-4 h-3 w-4 rotate-45 rounded-full bg-white/90" />

        {isTextOnly ? (
          <Text
            className={cn(
              "text-white text-base font-semibold",
              variant === "outline" && "text-white",
              textClassName,
            )}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    );
  },
);

Button.displayName = "Button";
