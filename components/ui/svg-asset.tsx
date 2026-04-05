import { Asset } from "expo-asset";
import { memo } from "react";
import { type StyleProp, type ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";

type SvgAssetProps = {
  source: number;
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

function SvgAssetBase({ source, width, height, color, style }: SvgAssetProps) {
  const uri = Asset.fromModule(source).uri;

  return (
    <SvgUri
      uri={uri}
      width={width}
      height={height}
      color={color}
      style={style}
    />
  );
}

export const SvgAsset = memo(SvgAssetBase);
