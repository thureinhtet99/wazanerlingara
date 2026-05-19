/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors, ThemeTokens } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

type RuntimeColorName = keyof typeof Colors.light & keyof typeof Colors.dark;
type SemanticColorName = keyof typeof ThemeTokens.ui.light;

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: RuntimeColorName | SemanticColorName,
) {
	const theme = useColorScheme() ?? "light";
	const colorFromProps = props[theme];

	if (colorFromProps) return colorFromProps;

	if (colorName in ThemeTokens.ui.light)
		return ThemeTokens.ui[theme][colorName as SemanticColorName];

	return Colors[theme][colorName as RuntimeColorName];
}
