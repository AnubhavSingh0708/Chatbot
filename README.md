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
