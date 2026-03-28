import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@/lib/util";

const TEXT_COLOR_CLASS_REGEX =
  /\btext-(?:\[[^\]]+\]|(?:black|white|transparent|current|inherit)|(?:[a-z]+(?:-[a-z]+)*)-\d{2,3})\b/i;

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  className?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  className,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const hasTextColorClass = TEXT_COLOR_CLASS_REGEX.test(className ?? "");

  return (
    <Text
      className={cn(className)}
      style={[
        !hasTextColorClass ? { color } : undefined,
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "CustomFont",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "CustomFont",
  },
  title: {
    fontSize: 36,
    lineHeight: 40,
    fontFamily: "CustomFont",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "CustomFont",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "CustomFont",
  },
});
