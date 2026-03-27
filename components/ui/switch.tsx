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
        "relative h-10 w-20 justify-center rounded-full border px-2",
        isChecked
          ? "border-primary-500 bg-primary-500"
          : "border-neutral-500 bg-neutral-800",
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
          "text-center text-xs",
          isChecked ? "text-white pr-5" : "text-neutral-300 pl-5",
        )}
      >
        {isChecked ? onLabel : offLabel}
      </ThemedText>

      <View
        className={cn(
          "absolute top-1 h-7 w-7 rounded-full",
          isChecked ? "right-1 bg-white" : "left-1 bg-neutral-200",
        )}
        accessibilityRole="switch"
      />
    </Pressable>
  );
}
