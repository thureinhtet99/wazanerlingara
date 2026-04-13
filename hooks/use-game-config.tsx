import { CONFIG } from "@/constants/config";
import {
  GameConfigContextType,
  GameConfigPatchType,
  GameConfigType,
  PlayerType,
} from "@/types/index.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const GAME_CONFIG_KEY = CONFIG.APP_NAME;
const DEFAULT_GAME_CONFIG: GameConfigType = {
  id: `${CONFIG.APP_NAME}-game-config`,
  players: [],
  gameMode: "word",
  category: "animals",
  gameSetting: {
    imposterCount: 1,
    turnTimer: 10,
    durationTimer: 300,
    canImposterGetHint: false,
  },
  word: null,
  question: null,
  roundCount: 3,
  imposterId: "",
};

const noop = () => undefined;

const GameConfigContext = createContext<GameConfigContextType>({
  config: DEFAULT_GAME_CONFIG,
  loading: false,
  setGameConfig: noop,
  updateGameConfig: noop,
  setPlayers: noop,
  resetGameConfig: noop,
});

const normalizeConfig = (
  storedConfig: Partial<GameConfigType>,
): GameConfigType => ({
  ...DEFAULT_GAME_CONFIG,
  ...storedConfig,
  players: Array.isArray(storedConfig.players)
    ? storedConfig.players
    : DEFAULT_GAME_CONFIG.players,
  gameSetting: {
    ...DEFAULT_GAME_CONFIG.gameSetting,
    ...(storedConfig.gameSetting ?? {}),
  },
});

export function GameConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<GameConfigType>(DEFAULT_GAME_CONFIG);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadConfig = async () => {
      try {
        const storedConfig = await AsyncStorage.getItem(GAME_CONFIG_KEY);

        if (storedConfig && isMounted) {
          setConfig(normalizeConfig(JSON.parse(storedConfig)));
        }
      } catch {
        if (isMounted) {
          setConfig(DEFAULT_GAME_CONFIG);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadConfig();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    void AsyncStorage.setItem(GAME_CONFIG_KEY, JSON.stringify(config));
  }, [config, loading]);

  const updateGameConfig = (patch: GameConfigPatchType) => {
    setConfig((currentConfig) => ({
      ...currentConfig,
      ...patch,
      gameSetting: patch.gameSetting
        ? { ...currentConfig.gameSetting, ...patch.gameSetting }
        : currentConfig.gameSetting,
    }));
  };

  const setPlayers = (players: PlayerType[]) => {
    setConfig((currentConfig) => ({ ...currentConfig, players }));
  };

  const resetGameConfig = () => {
    setConfig(DEFAULT_GAME_CONFIG);

    void AsyncStorage.removeItem(GAME_CONFIG_KEY);
  };

  const value = useMemo(
    () => ({
      config,
      loading,
      setGameConfig: setConfig,
      updateGameConfig,
      setPlayers,
      resetGameConfig,
    }),
    [config, loading],
  );

  return (
    <GameConfigContext.Provider value={value}>
      {children}
    </GameConfigContext.Provider>
  );
}

export function useGameConfig() {
  return useContext(GameConfigContext);
}
