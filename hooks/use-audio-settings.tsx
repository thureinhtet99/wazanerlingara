import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAudioModeAsync, useAudioPlayer } from "expo-audio";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { CONFIG, DEFAULT_AUDIO_SETTING } from "@/constants/config";
import {
  AudioSettingsContextType,
  AudioSettingsType,
} from "@/types/index.types";

const CLICK_SOUND = require("@/assets/audio/click.mp3");
const BACKGROUND_MUSIC = require("@/assets/audio/cotton-toys.mp3");

const noop = () => undefined;

const defaultAudioSettingsContextValue: AudioSettingsContextType = {
  ...DEFAULT_AUDIO_SETTING,
  loading: false,
  ready: false,
  setMusicEnabled: noop,
  setSoundEnabled: noop,
  toggleMusic: noop,
  toggleSound: noop,
  playClickSound: noop,
};

const AudioSettingsContext = createContext(defaultAudioSettingsContextValue);

export function AudioSettingsProvider({ children }: { children: ReactNode }) {
  const [musicEnabled, setMusicEnabled] = useState(
    DEFAULT_AUDIO_SETTING.musicEnabled,
  );
  const [soundEnabled, setSoundEnabled] = useState(
    DEFAULT_AUDIO_SETTING.soundEnabled,
  );
  const [loading, setLoading] = useState(true);
  const [audioModeReady, setAudioModeReady] = useState(false);
  const [playersPrimed, setPlayersPrimed] = useState(false);

  const backgroundMusicPlayer = useAudioPlayer(BACKGROUND_MUSIC);
  const clickSoundPlayer = useAudioPlayer(CLICK_SOUND);

  useEffect(() => {
    setAudioModeAsync({
      playsInSilentMode: true,
      // shouldPlayInBackground: true,
    })
      .catch(() => undefined)
      .finally(() => setAudioModeReady(true));
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadAudioSettings = async () => {
      try {
        const storedSettings = await AsyncStorage.getItem(
          CONFIG.AUDIO_SETTINGS_KEY,
        );

        if (storedSettings) {
          const parsedSettings = JSON.parse(
            storedSettings,
          ) as Partial<AudioSettingsType>;

          if (typeof parsedSettings.musicEnabled === "boolean") {
            setMusicEnabled(parsedSettings.musicEnabled);
          }

          if (typeof parsedSettings.soundEnabled === "boolean") {
            setSoundEnabled(parsedSettings.soundEnabled);
          }
        }
      } catch {
        setMusicEnabled(DEFAULT_AUDIO_SETTING.musicEnabled);
        setSoundEnabled(DEFAULT_AUDIO_SETTING.soundEnabled);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadAudioSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    Promise.allSettled([
      clickSoundPlayer.seekTo(0),
      backgroundMusicPlayer.seekTo(0),
    ]).finally(() => {
      setPlayersPrimed(true);
    });
  }, [backgroundMusicPlayer, clickSoundPlayer, loading]);

  const ready = !loading && audioModeReady && playersPrimed;

  useEffect(() => {
    if (loading) {
      return;
    }

    AsyncStorage.setItem(
      CONFIG.AUDIO_SETTINGS_KEY,
      JSON.stringify({ musicEnabled, soundEnabled }),
    );
  }, [loading, musicEnabled, soundEnabled]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    backgroundMusicPlayer.loop = true;

    if (musicEnabled) {
      backgroundMusicPlayer.play();
      return;
    }

    backgroundMusicPlayer.pause();
  }, [backgroundMusicPlayer, ready, musicEnabled]);

  const playClickSound = () => {
    if (!ready || !soundEnabled) {
      return;
    }

    clickSoundPlayer
      .seekTo(0)
      .catch(() => undefined)
      .finally(() => {
        clickSoundPlayer.play();
      });
  };

  const value: AudioSettingsContextType = {
    musicEnabled,
    soundEnabled,
    loading,
    ready,
    setMusicEnabled,
    setSoundEnabled,
    toggleMusic: () => setMusicEnabled((current) => !current),
    toggleSound: () => setSoundEnabled((current) => !current),
    playClickSound,
  };

  return (
    <AudioSettingsContext.Provider value={value}>
      {children}
    </AudioSettingsContext.Provider>
  );
}

export function useAudioSettings() {
  return useContext(AudioSettingsContext);
}
