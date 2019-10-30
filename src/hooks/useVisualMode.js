import { useState } from 'react';

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  return {
    mode,
    transition(newMode, replace = false) {
      if (!replace) {
        setMode(newMode);
        setHistory([...history, mode]);
      } else {
        setMode(newMode);
        setHistory([...history, history[0]]);
      }
    },
    back() {
      if (history.length > 1){
        setMode(history.pop());
      } else {
        setMode(history[0]);
      }
    }
  };
}