import { StyleSheet, Text, type TextProps } from "react-native";

import { Typography } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@/lib/util";

type ThemedTextProps = TextProps & {
	lightColor?: string;
	darkColor?: string;
	type?:
		| "default"
		| "title"
		| "legend"
		| "defaultSemiBold"
		| "subtitle"
		| "description"
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
	const primaryTextColor = useThemeColor({}, "textPrimary");
	const linkColor = useThemeColor({}, "textSecondary");
	const resolvedColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		type === "link" ? "textSecondary" : "textPrimary",
	);

	return (
		<Text
			className={cn(className)}
			style={[
				{
					color:
						resolvedColor ?? (type === "link" ? linkColor : primaryTextColor),
				},
				type === "default" ? styles.default : undefined,
				type === "title" ? styles.title : undefined,
				type === "legend" ? styles.legend : undefined,
				type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
				type === "description" ? styles.description : undefined,
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
		fontSize: Typography.fontSize.default,
		lineHeight: Typography.lineHeight.default,
		fontFamily: Typography.fontFamily.primary,
	},
	defaultSemiBold: {
		fontSize: Typography.fontSize.defaultSemiBold,
		lineHeight: Typography.lineHeight.defaultSemiBold,
		fontWeight: "600",
		fontFamily: Typography.fontFamily.primary,
	},
	title: {
		fontSize: Typography.fontSize.title,
		lineHeight: Typography.lineHeight.title,
		fontFamily: Typography.fontFamily.primary,
	},
	legend: {
		fontSize: Typography.fontSize.legend,
		lineHeight: Typography.lineHeight.legend,
		fontFamily: Typography.fontFamily.primary,
	},
	description: {
		fontSize: Typography.fontSize.description,
		lineHeight: Typography.lineHeight.description,
		fontFamily: Typography.fontFamily.primary,
	},
	subtitle: {
		fontSize: Typography.fontSize.subtitle,
		lineHeight: Typography.lineHeight.subtitle,
		fontFamily: Typography.fontFamily.primary,
	},
	link: {
		fontSize: Typography.fontSize.default,
		lineHeight: Typography.lineHeight.default,
		fontFamily: Typography.fontFamily.primary,
	},
});
