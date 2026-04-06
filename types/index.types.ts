import type { SvgKey } from "@/constants/icons";
import type { ReactNode } from "react";
import { type StyleProp, type ViewStyle } from "react-native";

export type GameType = "word" | "question";

export type ModeType = {
  id: GameType;
  title: string;
  desc: string;
  icon: any;
};

export type SetupSettingItemType = {
  id: string;
  label: string;
  icon: ReactNode;
  hasToggle?: boolean;
};

export type PlayerInputType = {
  id: string;
  name: string;
};

export type CategoryType =
  | "animals"
  | "foods"
  | "locations"
  | "countries"
  | "movies"
  | "jobs"
  | "technologies"
  | "imaginations"
  | "supes"
  | "nature"
  | "histories"
  | "sports";

export type CategoryCardType = {
  type: CategoryType;
  title: string;
  image: any;
};

export type SvgAssetType = {
  source: SvgKey | number;
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
