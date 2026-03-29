import type { ReactNode } from "react";

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
