import {
  AudioSettingsType,
  CategoryType,
  GameConfigType,
  GameSettingType,
} from "@/types/index.types";

export const CONFIG = {
  APP_NAME: "wazanerlingara",
  VERSION: "1.0.0",

  AUDIO_SETTINGS_KEY: "wazanerlingara-audio-settings",
  ONBOARDING_KEY: "wazanerlingara-onboarding",

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
  VOTE_TRANSITION: "/vote-transition",
  VOTE_RESULT: "/vote-result",
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
  imposterIds: [],
  roleRevealTime: 5,
};

export const DEFAULT_AUDIO_SETTING: AudioSettingsType = {
  musicEnabled: true,
  soundEnabled: true,
};

export const LOCKED_PLAYERS = 7;
