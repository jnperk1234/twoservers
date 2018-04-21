var http = require("http")

var PORT = 7000;
var PORT2 = 7050;

function handleRequestOne(request, response) {
    response.end("Awesome!")
}

function handleRequestTwo(request, response) {
    response.end("Dope!")
}

var serverOne = http.createServer(handleRequestOne)
var serverTwo = http.createServer(handleRequestTwo)

serverOne.listen(PORT, function(){
    console.log("Server 1 is listening" + PORT)
});

serverTwo.listen(PORT2, function(){
    console.log("Server 2 is listening" + PORT2)
});

