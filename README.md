# Chatbot
this is a chatbot whom you can talk with chat with
### key elements 
1. speech recognition 
2. finding reply 
3. chat 
4. text to speech 
5. detecting a queston and answer
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
```
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
  synth.speak(voce);//here voise is the reply of chatbot
}
```
### if the user askes a question
then the chatbot will recogonise it by `if (text.match(/(what is|what's |What is)/gi)){}`
and then it will ask you to make decison to redirect or stay there or redirect using`confirm("Do you want to redirect to "+topicOfQ)`
and then google search using `location.replace("https://www.google.com/search?q="+searchFor);`
