export const getGameMode = (mode: string): string => {
	const modeMap: Record<string, string> = {
		word: "စကားလုံးဂိမ်း",
		question: "အမေးအဖြေဂိမ်း",
	};
	return modeMap[mode] || mode;
};
