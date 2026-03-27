import MainLayout from "@/components/layout/main-layout";
import "@/global.css";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    CustomFont: require("../assets/fonts/handwrittenFont.ttf"),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <MainLayout>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="test-screen" />
          <Stack.Screen name="index" />
          <Stack.Screen name="game-start" />
        </Stack>
      </MainLayout>
    </ThemeProvider>
  );
}
