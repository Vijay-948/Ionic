import { useState } from "react";

export const useStoredState = (storageKey, defaultState) => {
  const getInitialState = () => {
    const storeState = localStorage.getItem(storageKey);
    return storeState ?? defaultState;
  };
  const [state, setState] = useState(getInitialState);
  function setAndStoreState(state) {
    setState(state);
    localStorage.setItem(storageKey, state);
  }
  return [state, setAndStoreState];
};
