# Chatbot
this is a chatbot
### key elements 
1. speech recognition 
2. finding reply 
3. chat 
4. text to speech 
#### speech recognition 
here speech recognition is carried out by 
1. `recognition.onstart` : This is an event handler that will run when the speech recognition service has begun listening to incoming audio. 
2. `recognition.onresult` : Another event handler that will run when the speech recognition service returns a result 
3. `recognition.start()` : This method will start the speech recognition service and start listening to incoming audio, running this code for the first time will show a dialog asking for access to your device microphone like below 
4. `recognition.grammars` : Used to set the grammars that will be understood by the speech recognition 
#### processing input and output 
1. `DOMContentLoaded` means your JS won't run until the HTML has loaded. This is almost always good practice. Then the EventListener for keypress send button. Notice we must also select the `#input` for the form submission, or else our event listener would respond every time we pressed the send key!
2. finding replies from `constants.js` using `const prompt` array and `const replies` array.
3. choosing correct answer by using index of array of prompts and replies 
#### chat 

#### text to speech 
text to speech using speech syntesyser 
`function speak(string) {

  const u = new SpeechSynthesisUtterance();

  allVoices = speechSynthesis.getVoices();

  u.voice = allVoices.filter(voice => voice.name === "Alex")[0];

  u.text = string;

  u.lang = "en-US";

  u.volume = 1; //0-1 interval

  u.rate = 1;

  u.pitch = 1; //0-2 interval

  speechSynthesis.speak(u);

}`
