var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = ["hi", "hey", "hello", "good morning", "good afternoon","how are you", "how is life", "how are things",
"what are you doing", "what is going on", "what is up","how old are you",        
  "who are you", "are you human", "are you bot", "are you human or bot",
 "who created you", "who made you",
 "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself",
  "i love you",
  "happy", "good", "fun", "wonderful", "fantastic", "cool",
  "bad", "bored", "tired",
  "help me", "tell me story",
 "ah", "yes", "ok", "okay", "nice",
  "bye", "good bye", "goodbye", "see you later",
  "what should i eat today",
  "bro",
  "what", "why", "how", "where", "when",
  "no","not sure","maybe","no thanks",
  "",
  "haha","ha","lol","hehe","funny","joke",
  "tell me a joke","one joke please","Tell me a joke","One joke please","one more joke please","One more joke please"
];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');
 var theInput = document.getElementById("input").value;
var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
});

diagnostic.addEventListener("click", function(){
  recognition.start();
  console.log('Ready to receive a color command.');
});

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  diagnostic.textContent =  color + '.';
theInput.value = color
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
