import type { ReactNode } from "react";

// Game Setup
export type SetupPageSettingItemType = {
  id: string;
  label: string;
  icon: ReactNode;
  hasToggle?: boolean;
};

export type PlayerInputType = {
  id: string;
  name: string;
};

export type GameCategoryType =
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
  type: GameCategoryType;
  title: string;
  image: string;
};
