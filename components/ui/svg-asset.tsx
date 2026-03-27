import { Asset } from "expo-asset";
import { memo } from "react";
import { type StyleProp, type ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";

type SvgAssetProps = {
  source: number;
  width?: number | string;
  height?: number | string;
  style?: StyleProp<ViewStyle>;
};

function SvgAssetBase({ source, width, height, style }: SvgAssetProps) {
  const uri = Asset.fromModule(source).uri;

  return <SvgUri uri={uri} width={width} height={height} style={style} />;
}

export const SvgAsset = memo(SvgAssetBase);
