import { Href } from "expo-router";
import { type StyleProp, type ViewStyle } from "react-native";

import type { SvgKey } from "@/constants/icons";
import type { AvatarId } from "@/features/role-reveal/lib/avatar";

export type GameType = "word" | "question";
export type TimerModeType = "turn" | "duration";

export type ModeType = {
  id: GameType;
  title: string;
  desc: string;
  icon: string | null;
};

export type PlayerType = {
  id: string;
  name: string;
  imageId: AvatarId;
};

export type SettingType =
  | {
      id: string;
      label: string;
      icon: {
        family: "Ionicons" | "MaterialCommunityIcons";
        name: string;
      };
      hasToggle: true;
      route?: never;
    }
  | {
      id: string;
      label: string;
      icon: {
        family: "Ionicons" | "MaterialCommunityIcons";
        name: string;
      };
      hasToggle?: false;
      route: Href;
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
  gameMode: GameType;
  revealContent: string;
  imposterIds: string[];
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

export type AudioSettingsType = {
  musicEnabled: boolean;
  soundEnabled: boolean;
};

export type AudioSettingsContextType = AudioSettingsType & {
  loading: boolean;
  ready: boolean;
  setMusicEnabled: (enabled: boolean) => void;
  setSoundEnabled: (enabled: boolean) => void;
  toggleMusic: () => void;
  toggleSound: () => void;
  playClickSound: () => void;
};

export type GameSettingType = {
  imposterCount: number;
  timerMode: TimerModeType;
  turnTimer: number;
  durationTimer: number;
  canImposterGetHint: boolean;
};

export type WordType = {
  id: string;
  text: string;
  image: string | null;
  hint: string;
};
export type QuestionType = {
  id: string;
  text: string;
  image: string | null;
  hint: string;
};

// -----------Game config-----------------
export type GameConfigType = {
  id: string;
  players: PlayerType[];
  gameMode: "word" | "question";
  category: CategoryType;
  gameSetting: GameSettingType;
  word: WordType | null;
  question: QuestionType | null;
  roundCount: number;
  imposterIds: string[];
  roleRevealTime: number;
};

export type GameConfigPatchType = Omit<
  Partial<GameConfigType>,
  "gameSetting"
> & {
  gameSetting?: Partial<GameSettingType>;
};

export type GameConfigContextType = {
  config: GameConfigType;
  loading: boolean;
  setGameConfig: (config: GameConfigType) => void;
  updateGameConfig: (patch: GameConfigPatchType) => void;
  setPlayers: (players: PlayerType[]) => void;
  resetGameConfig: () => void;
};
