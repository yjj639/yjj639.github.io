const listDiv = document.querySelector(".list");
const username = document.getElementById("username");

var requestURL = "data.json";
var data;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    data = request.response;
    console.log(data);
}

username.innerHTML = data["user"];
data["titles"].forEach(element => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = element;
    listDiv.append(item);
});
