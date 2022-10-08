function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes(); 
    if(hours < 10){
        hours = "0"+hours}
    if(minutes< 10){
        minutes= "0"+minutes}
    let time = hours+":"+minutes;
    return time;}

function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    let time = getTime();
    document.getElementById("chat-timestamp").innerHTML = '<center><h5 id="chat-timestamp">'+time+'</h5></center>';}
firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }
    let time = getTime();
    let userHtml = '<p class="userText"><span>'+userText+'</span></p>';
    
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    
    getHardResponse(userText);

}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
         getHardResponse(sampleText);
     }, 1000)
}

// Handles sending text via button clicks

function sendButton() {
    getResponse();
}


function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input ==  "who created you"){
        return "My Master teach me his name is Arun";
    }else{
        return "Try asking something else!";
    }

}
