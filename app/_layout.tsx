import { Asset, useAssets } from "expo-asset";
import { useFonts } from "expo-font";
import { Stack, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MainLayout from "@/components/layout/main-layout";
import { images, svgs } from "@/constants/icons";
import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";
import "@/global.css";
import {
	AudioSettingsProvider,
	useAudioSettings,
} from "@/hooks/use-audio-settings";
import { GameConfigProvider } from "@/hooks/use-game-config";

import Loading from "./loading";

SplashScreen.preventAutoHideAsync();

const CRITICAL_ASSET_MODULES = [svgs.logoSvg, svgs.wazanerlingaraSvg];
const NON_CRITICAL_ASSET_MODULES = Object.values(images);

function AppRoutes() {
	const segments = useSegments();
	const [loadedAssets, assetsError] = useAssets(CRITICAL_ASSET_MODULES);
	const { completed, loading: onboardingLoading } = useOnboarding();
	const { ready: audioReady } = useAudioSettings();
	const [didStartNonCriticalWarmup, setDidStartNonCriticalWarmup] =
		useState(false);

	const isOnboardingRoute = segments[0] === "onboarding";
	const [fontLoaded, error] = useFonts({
		"hand-written": require("@/assets/fonts/handwrittenFont.ttf"),
	});

	const criticalAssetsReady = Boolean(loadedAssets) || Boolean(assetsError);
	const startupReady =
		(fontLoaded || Boolean(error)) &&
		criticalAssetsReady &&
		!onboardingLoading &&
		audioReady;

	useEffect(() => {
		if (!startupReady || didStartNonCriticalWarmup) {
			return;
		}

		setDidStartNonCriticalWarmup(true);
		Asset.loadAsync(NON_CRITICAL_ASSET_MODULES);
	}, [startupReady, didStartNonCriticalWarmup]);

	useEffect(() => {
		if (!startupReady) {
			return;
		}

		SplashScreen.hideAsync();
	}, [startupReady]);

	const routes = useMemo(
		() => (
			<Stack
				initialRouteName={completed ? "index" : "onboarding"}
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
				<Stack.Screen name="vote" />
				<Stack.Screen name="vote-transition" />
				<Stack.Screen name="vote-result" />
			</Stack>
		),
		[completed],
	);

	if (!startupReady) return <Loading />;

	return (
		<>
			{isOnboardingRoute ? routes : <MainLayout>{routes}</MainLayout>}
			<StatusBar translucent backgroundColor="transparent" style="light" />
		</>
	);
}

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<AudioSettingsProvider>
				<GameConfigProvider>
					<AppRoutes />
				</GameConfigProvider>
			</AudioSettingsProvider>
		</GestureHandlerRootView>
	);
}
