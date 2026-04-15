import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAudioModeAsync, useAudioPlayer } from "expo-audio";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  AudioSettingsContextType,
  AudioSettingsType,
} from "@/types/index.types";

const AUDIO_SETTINGS_KEY = "audio-settings";
const CLICK_SOUND = require("@/assets/audio/click.mp3");
const BACKGROUND_MUSIC = require("@/assets/audio/cotton-toys.mp3");

const defaultAudioSettings: AudioSettingsType = {
  musicEnabled: true,
  soundEnabled: true,
};

const noop = () => undefined;

const defaultAudioSettingsContextValue: AudioSettingsContextType = {
  ...defaultAudioSettings,
  loading: false,
  setMusicEnabled: noop,
  setSoundEnabled: noop,
  toggleMusic: noop,
  toggleSound: noop,
  playClickSound: noop,
};

const AudioSettingsContext = createContext(defaultAudioSettingsContextValue);

export function AudioSettingsProvider({ children }: { children: ReactNode }) {
  const [musicEnabled, setMusicEnabled] = useState(
    defaultAudioSettings.musicEnabled,
  );
  const [soundEnabled, setSoundEnabled] = useState(
    defaultAudioSettings.soundEnabled,
  );
  const [loading, setLoading] = useState(true);

  const backgroundMusicPlayer = useAudioPlayer(BACKGROUND_MUSIC);
  const clickSoundPlayer = useAudioPlayer(CLICK_SOUND);

  useEffect(() => {
    void setAudioModeAsync({
      playsInSilentMode: true,
      // shouldPlayInBackground: true,
    });
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadAudioSettings = async () => {
      try {
        const storedSettings = await AsyncStorage.getItem(AUDIO_SETTINGS_KEY);

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
        setMusicEnabled(defaultAudioSettings.musicEnabled);
        setSoundEnabled(defaultAudioSettings.soundEnabled);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadAudioSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    void AsyncStorage.setItem(
      AUDIO_SETTINGS_KEY,
      JSON.stringify({ musicEnabled, soundEnabled }),
    );
  }, [loading, musicEnabled, soundEnabled]);

  useEffect(() => {
    if (loading) {
      return;
    }

    backgroundMusicPlayer.loop = true;

    if (musicEnabled) {
      backgroundMusicPlayer.play();
      return;
    }

    backgroundMusicPlayer.pause();
  }, [backgroundMusicPlayer, loading, musicEnabled]);

  const playClickSound = () => {
    if (loading || !soundEnabled) {
      return;
    }

    void clickSoundPlayer
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
