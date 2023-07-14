const listDiv = document.querySelector(".list");
const username = document.getElementById("username");
var parsedData;
var requestURL = "https://yjj639.github.io/data.json";
var textURL = "textree\notes\EXAMPLE NOTE1.txt";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var data = request.response;
    console.log("request.onload 안");
    console.log(data["user"]);
    username.innerText = data["user"];
    parsedData = JSON.parse(JSON.stringify(data));
    
    parsedData["titles"].forEach(element => {
        var item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `<a href="note.html">${element}</a>`;
        listDiv.append(item);
    });
}

var textReq = new XMLHttpRequest();
textReq.open("GET", textURL);
textReq.responseType = 'text';
textReq.send();

textReq.onload = function() {
    console.log("textReq 안");
    console.log(textReq.response);
}