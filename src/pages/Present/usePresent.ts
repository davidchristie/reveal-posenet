import useGestures from "./useGestures";
import useSlides from "./useSlides";

interface KeyPoint {
  part: "rightWrist";
  position: {
    x: number;
    y: number;
  };
  score: number;
}

interface Pose {
  keypoints: KeyPoint[];
  score: number;
}

interface Video {
  videoHeight: number;
  videoWidth: number;
}

export default function usePresent() {
  const gestures = useGestures();
  const slides = useSlides();

  const onUpdate = ({ keypoints }: Pose, { videoWidth }: Video) => {
    const rightWrist = keypoints.find(({ part }) => part === "rightWrist");

    if (rightWrist && rightWrist.position.x > videoWidth - 50) {
      gestures.handRight(() => {
        slides.next();
      });
    } else if (rightWrist && rightWrist.position.x < 50) {
      gestures.handLeft(() => {
        slides.previous();
      });
    } else if (rightWrist) {
      gestures.reset();
    }
  };

  return {
    onUpdate
  };
}
