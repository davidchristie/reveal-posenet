export function say(text: string) {
  console.debug("Say:", text);
  if (window.speechSynthesis && window.SpeechSynthesisUtterance) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech synthesis is not supported.");
  }
}
