import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { CONFIG, DEFAULT_GAME_CONFIG } from "@/constants/config";
import { AVATAR_IDS, type AvatarId } from "@/features/role-reveal/lib/avatar";
import {
  GameConfigContextType,
  GameConfigPatchType,
  GameConfigType,
  PlayerType,
} from "@/types/index.types";

const GAME_CONFIG_KEY = CONFIG.APP_NAME;

type LegacyStoredGameConfig = Partial<GameConfigType> & {
  imposterId?: string;
  players?: (Partial<PlayerType> & {
    image?: string | null;
    imageId?: string | null;
  })[];
};

const isAvatarId = (value: string): value is AvatarId =>
  AVATAR_IDS.includes(value as AvatarId);

const sanitizePlayers = (
  players: LegacyStoredGameConfig["players"],
): PlayerType[] => {
  if (!Array.isArray(players)) {
    return DEFAULT_GAME_CONFIG.players;
  }

  return players.map((player, index) => {
    const resolvedImageId =
      typeof player.imageId === "string" && isAvatarId(player.imageId)
        ? player.imageId
        : AVATAR_IDS[index % AVATAR_IDS.length];

    return {
      id:
        typeof player.id === "string" && player.id.length > 0
          ? player.id
          : `player-${index + 1}`,
      name:
        typeof player.name === "string" && player.name.trim().length > 0
          ? player.name
          : `Player ${index + 1}`,
      imageId: resolvedImageId,
    };
  });
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
  storedConfig: LegacyStoredGameConfig,
): GameConfigType => ({
  ...DEFAULT_GAME_CONFIG,
  ...storedConfig,
  players: sanitizePlayers(storedConfig.players),
  gameSetting: {
    ...DEFAULT_GAME_CONFIG.gameSetting,
    ...(storedConfig.gameSetting ?? {}),
  },
  imposterIds: Array.isArray(storedConfig.imposterIds)
    ? storedConfig.imposterIds.filter(Boolean)
    : storedConfig.imposterId
      ? [storedConfig.imposterId]
      : DEFAULT_GAME_CONFIG.imposterIds,
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
      players:
        patch.players !== undefined
          ? sanitizePlayers(patch.players as LegacyStoredGameConfig["players"])
          : currentConfig.players,
      gameSetting: patch.gameSetting
        ? { ...currentConfig.gameSetting, ...patch.gameSetting }
        : currentConfig.gameSetting,
    }));
  };

  const setPlayers = (players: PlayerType[]) => {
    setConfig((currentConfig) => ({
      ...currentConfig,
      players: sanitizePlayers(players),
    }));
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
