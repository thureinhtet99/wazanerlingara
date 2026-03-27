import { cn } from "@/lib/util";
import { Pressable, View } from "react-native";
import { ThemedText } from "../themed-text";

export interface SwitchProps {
  checked?: boolean;
  value?: boolean;
  onChange?: (next: boolean) => void;
  onCheckedChange?: (next: boolean) => void;
  onLabel?: string;
  offLabel?: string;
  className?: string;
  disabled?: boolean;
}

export default function Switch({
  checked,
  value,
  onChange,
  onCheckedChange,
  onLabel = "On",
  offLabel = "Off",
  disabled = false,
  className,
}: SwitchProps) {
  const isChecked = checked ?? value ?? false;

  const handleChange = (next: boolean) => {
    onChange?.(next);
    onCheckedChange?.(next);
  };

  return (
    <Pressable
      onPress={() => !disabled && handleChange(!isChecked)}
      disabled={disabled}
      className={cn(
        "relative h-8 w-[60px] justify-center rounded-full border border-white/80 bg-neutral-500/40 px-0.5",
        isChecked ? "bg-primary-500/80" : "bg-neutral-400/50",
        disabled && "opacity-50",
        className,
      )}
      accessibilityRole="switch"
      accessibilityState={{ checked: isChecked, disabled }}
      accessibilityLabel={isChecked ? onLabel : offLabel}
    >
      <ThemedText
        type="defaultSemiBold"
        className={cn(
          "text-[12px] leading-3",
          isChecked ? "self-start pl-1 text-white" : "self-end pr-1 text-white",
        )}
      >
        {isChecked ? onLabel : offLabel}
      </ThemedText>

      <View
        className={cn(
          "absolute top-0.5 h-6 w-6 rounded-full bg-white",
          isChecked ? "right-0.5" : "left-0.5",
        )}
      />
    </Pressable>
  );
}
