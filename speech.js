// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voce = new SpeechSynthesisUtterance(string);
  var voices = window.speechSynthesis.getVoices();

voce.voice = voices[0];
  voce.text = string;
  voce.lang = "en-US";
  voce.volume = 1;
  voce.rate = 1;
  voce.pitch = 1; // Can be 0, 1, or 2
  synth.speak(voce);
}
