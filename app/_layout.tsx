import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { Stack, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import MainLayout from "@/components/layout/main-layout";
import { svg } from "@/constants/icons";
import "@/global.css";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { GameConfigProvider } from "@/hooks/use-game-config";

import { AudioSettingsProvider } from "../hooks/use-audio-settings";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();

  const isOnboardingRoute = segments[0] === "onboarding";
  const [fontLoaded, error] = useFonts({
    "hand-written": require("@/assets/fonts/handwrittenFont.ttf"),
  });

  useEffect(() => {
    Asset.loadAsync(Object.values(svg)).catch(() => undefined);
  }, []);

  useEffect(() => {
    if (fontLoaded || error) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) return null;

  const routes = (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="index" />
      <Stack.Screen name="setting" />
      <Stack.Screen name="how-to-play" />
      <Stack.Screen name="privacy" />
      <Stack.Screen name="contact" />
      <Stack.Screen name="start" />
      <Stack.Screen name="mode" />
      <Stack.Screen name="categories" />
      <Stack.Screen name="game-setting" />
      <Stack.Screen name="role-reveal" />
      <Stack.Screen name="spinner-screen" />
      <Stack.Screen name="game-play" />
      <Stack.Screen name="test-screen" />
    </Stack>
  );

  return (
    <>
      <AudioSettingsProvider>
        <GameConfigProvider>
          {isOnboardingRoute ? routes : <MainLayout>{routes}</MainLayout>}
        </GameConfigProvider>
      </AudioSettingsProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        style={colorScheme === "dark" ? "light" : "dark"}
      />
    </>
  );
}
