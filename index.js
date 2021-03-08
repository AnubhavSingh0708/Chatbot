document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
 document.getElementById("send").addEventListener("click", function() {
      let input = inputField.value;
      output(input);
  });
});

function output(input) {
  let product;
  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
     addChat(input, product);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
     addChat(input, product);
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
     addChat(input, product);
  }else if (text.match(/(what is|what's |What is)/gi)) {
   //if question is asked
    var topicOfQ = text.replace(/what is /g, "=");
    var searchFor = topicOfQ.replace(/ /g, "+");
    if (confirm("Do you want to redirect to "+topicOfQ)) {
 location.assign("https://www.google.com/search?q"+searchFor);
  } else {
 product = alternative[Math.floor(Math.random() * alternative.length)];
     addChat(input, product);
  }
  }else if (text.match(/(tell|tell me|told)/gi)) {
   //if question is asked
    var topicOfQ = text.replace(/tell me the/g, " ")
    .replace(/tell me/g, " ")
    .replace(/tell/g, " ");
    var searchFor = topicOfQ.replace(/ /g, "+");
    if (confirm("Do you want to redirect to "+topicOfQ)) {
 location.assign("https://www.google.com/search?q="+searchFor);
  } else {
 product = alternative[Math.floor(Math.random() * alternative.length)];
     addChat(input, product);
  }
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
     addChat(input, product);
  }
  // Update DOM
 
}
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}
function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);
  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )
}
