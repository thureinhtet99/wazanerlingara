import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { CONFIG } from "@/constants/config";

export const useOnboarding = () => {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadCompletionState = async () => {
      try {
        const value = await AsyncStorage.getItem(CONFIG.ONBOARDING_KEY);
        if (isMounted) setCompleted(value === "completed");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadCompletionState();

    return () => {
      isMounted = false;
    };
  }, []);

  const finish = async () => {
    await AsyncStorage.setItem(CONFIG.ONBOARDING_KEY, "completed");
    setCompleted(true);
  };

  const reset = async () => {
    await AsyncStorage.removeItem(CONFIG.ONBOARDING_KEY);
    setCompleted(false);
  };

  return { completed, loading, finish, reset };
};
