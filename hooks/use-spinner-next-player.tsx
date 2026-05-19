// Simple module-level reference to handle communication between spinner and role-reveal
// This avoids the need to add new providers to the entire app

let goToNextPlayerRef: (() => void) | null = null;

export const registerGoToNextPlayer = (fn: () => void) => {
	goToNextPlayerRef = fn;
};

export const callGoToNextPlayer = () => {
	if (goToNextPlayerRef) {
		goToNextPlayerRef();
	}
};

export const resetGoToNextPlayer = () => {
	goToNextPlayerRef = null;
};
