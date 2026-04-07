import { View, type ViewProps } from "react-native";

type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  return <View style={{ backgroundColor: "#000000" }} {...otherProps} />;
}
