import { Asset } from "expo-asset";
import { memo, useMemo } from "react";
import { SvgUri } from "react-native-svg";

import { svgs } from "@/constants/icons";
import { ThemeTokens } from "@/constants/theme";
import { SvgAssetType } from "@/types/index.types";

const uriCache = new Map<number, string>();

function getCachedUri(moduleSource: number) {
  const cached = uriCache.get(moduleSource);
  if (cached) return cached;

  const uri = Asset.fromModule(moduleSource).uri;
  uriCache.set(moduleSource, uri);
  return uri;
}

function SvgAssetBase({ source, width, height, color, style }: SvgAssetType) {
  const moduleSource = typeof source === "number" ? source : svgs[source];
  const uri = useMemo(() => getCachedUri(moduleSource), [moduleSource]);

  return (
    <SvgUri
      uri={uri}
      width={width}
      height={height}
      color={color || ThemeTokens.ui.white}
      style={style}
    />
  );
}

export const SvgAsset = memo(SvgAssetBase);
