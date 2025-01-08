import { useEffect } from "react";
import { useLoadingStore } from "@/stores/loadingStore";

const useTriggerLoadingApp = (value?: boolean) => {
  const updateLoadingApp = useLoadingStore((state) => state.updateLoading);
  useEffect(() => {
    updateLoadingApp(!!value);
  }, [updateLoadingApp, value]);

  return null;
};

export { useTriggerLoadingApp };
