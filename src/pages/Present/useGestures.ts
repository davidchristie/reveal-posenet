enum Gesture {
  HandLeft,
  HandRight,
  None
}

let current = Gesture.None;

export default function useGestures() {
  function handRight(action: () => void) {
    if (current !== Gesture.HandRight) {
      current = Gesture.HandRight;
      action();
    }
  }

  function handLeft(action: () => void) {
    if (current !== Gesture.HandLeft) {
      current = Gesture.HandLeft;
      action();
    }
  }

  function reset() {
    current = Gesture.None;
  }

  return {
    handLeft,
    handRight,
    reset
  };
}
