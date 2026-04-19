import {
  CategoryType,
  GameConfigType,
  GameSettingType,
} from "@/types/index.types";

export const CONFIG = {
  APP_NAME: "wazanerlingara",
  VERSION: "0.0.1",

  HOME: "/",
  START: "/start",
  MODE: "/mode",
  CATEGORIES: "/categories",
  SETTING: "/setting",
  GAME_SETTING: "/game-setting",
  ROLE_REVEAL: "/role-reveal",
  SPINNER_SCREEN: "/spinner-screen",
  GAME_PLAY: "/game-play",
  VOTE: "/vote",
  PRIVACY: "/privacy",
  CONTACT: "/contact",
  HOW_TO_PLAY: "/how-to-play",
} as const;

const CATEGORY: CategoryType = "animals";

const GAME_SETTING: GameSettingType = {
  imposterCount: 1,
  timerMode: "turn",
  turnTimer: 10,
  durationTimer: 120,
  canImposterGetHint: false,
};

export const DEFAULT_GAME_CONFIG: GameConfigType = {
  id: `${CONFIG.APP_NAME}-game-config`,
  players: [],
  gameMode: "word",
  category: CATEGORY,
  gameSetting: GAME_SETTING,
  word: null,
  question: null,
  roundCount: 3,
  imposterId: "",
  roleRevealTime: 10,
};
