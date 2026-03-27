import MainLayout from "@/components/layout/main-layout";
import "@/global.css";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <MainLayout>
        <Stack
          screenOptions={{ headerShown: false, contentStyle: styles.container }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="game-start" />
        </Stack>
      </MainLayout>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});
