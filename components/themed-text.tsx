import { cn } from "@/lib/util";
import { StyleSheet, Text, type TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "legend"
    | "defaultSemiBold"
    | "subtitle"
    | "link";
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
  return (
    <Text
      className={cn("text-white", className)}
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "legend" ? styles.legend : undefined,
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
    fontFamily: "hand-written",
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "hand-written",
  },
  title: {
    fontSize: 38,
    fontFamily: "hand-written",
  },
  legend: {
    fontSize: 48,
    lineHeight: 60,
    fontFamily: "hand-written",
  },
  subtitle: {
    fontSize: 26,
    lineHeight: 38,
    fontFamily: "hand-written",
  },
  link: {
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "hand-written",
  },
});
