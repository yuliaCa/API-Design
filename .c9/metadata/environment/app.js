{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":10,"column":7},"action":"insert","lines":["const express = require(\"express\");","const { then } = require(\"./connection.js\");","const app = express();","","const connected = require(\"./connection.js\");","","connected","    .then(() => {","        console.log(\"connected!\");","        const server = app.listen(8080, () => console.log(\"Listening\"));","    });"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":7},"end":{"row":10,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1634581296915,"hash":"3f2d4668aa64a959f07c08ae77d8df6e7fa871ca"}