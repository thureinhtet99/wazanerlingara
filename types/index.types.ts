import type { SvgKey } from "@/constants/icons";
import type { ReactNode } from "react";
import { type StyleProp, type ViewStyle } from "react-native";

export type GameType = "word" | "question";

export type PlayerType = {
  id: string;
  name: string;
  imageId: string | null;
};

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
  image: string;
};

export type SvgAssetType = {
  source: SvgKey | number;
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export type RoleCardType = {
  currentPlayer: PlayerType;
  revealContent: string;
  revealImageId?: string;
  imposterId: string;
  imposterCanGetHint: boolean;
  hint: string;
  showBlur: boolean;
  revealed: boolean;
  confirmed: boolean;
  timeLeft: number;
  handleClickCard: () => void;
  handleReveal: () => void;
};

export type OnboardingCardType = {
  title: string;
  description: string;
  image: string;
  step: number;
  isLast: boolean;
  onNext: () => void;
  handlePageChange: (page: number) => void;
  skip: () => void;
};

export type GameSettingType = {
  imposterCount: number;
  turnTimer: number;
  durationTimer: number;
  canImposterGetHint: boolean;
};

export type WordType = {
  id: string;
  text: string;
  imageId: string | null;
  hint: string;
};
export type QuestionType = {
  id: string;
  text: string;
  imageId: string | null;
  hint: string;
};

export type GameConfigType = {
  id: string;
  players: PlayerType[];
  gameMode: "word" | "question";
  category: CategoryType;
  gameSetting: GameSettingType;
  word: WordType | null;
  question: QuestionType | null;
  roundCount: number;
  imposterId: string;
};
