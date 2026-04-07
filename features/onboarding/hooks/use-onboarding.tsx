import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const ONBOARDING_KEY = "onboarding";

export const useOnboarding = () => {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadCompletionState = async () => {
      try {
        const value = await AsyncStorage.getItem(ONBOARDING_KEY);
        if (isMounted) setCompleted(value === "completed");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadCompletionState();

    return () => {
      isMounted = false;
    };
  }, []);

  const finish = async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, "completed");
    setCompleted(true);
  };

  const reset = async () => {
    await AsyncStorage.removeItem(ONBOARDING_KEY);
    setCompleted(false);
  };

  return { completed, loading, finish, reset };
};
