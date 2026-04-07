import { svg } from "@/constants/icons";
import { SvgAssetType } from "@/types/index.types";
import { Asset } from "expo-asset";
import { memo, useMemo } from "react";
import { SvgUri } from "react-native-svg";

const uriCache = new Map<number, string>();

function getCachedUri(moduleSource: number) {
  const cached = uriCache.get(moduleSource);
  if (cached) return cached;

  const uri = Asset.fromModule(moduleSource).uri;
  uriCache.set(moduleSource, uri);
  return uri;
}

function SvgAssetBase({ source, width, height, color, style }: SvgAssetType) {
  const moduleSource = typeof source === "number" ? source : svg[source];
  const uri = useMemo(() => getCachedUri(moduleSource), [moduleSource]);

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
