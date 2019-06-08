let consoleNode = document.getElementById('console');
const clearButton = document.getElementById('clear-button');
const initConsoleStack = window.localStorage.getItem('consoleStack');
let consoleStack = initConsoleStack ? initConsoleStack.split(',') : [];

clearButton.addEventListener('click', function(){
  localStorage.clear();
  consoleStack = [];
  consoleNode.innerHTML = '';
})

function pushLocalStrage(message) {
  return new Promise(function(resolve){
    consoleStack.push(message);
    window.localStorage.setItem('consoleStack', consoleStack);
    resolve();
  })
}

function setConsoleStackToNode() {
  consoleNode.innerHTML = consoleStack.join('</br>');
}

window.addEventListener('load', function () {
  const message = "browser-event-checker: load!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

window.addEventListener('focus', function () {
  const message = "browser-event-checker: focus!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

window.addEventListener('beforeunload', function () {
  const message = "browser-event-checker: beforeunload!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

window.addEventListener('pagehide', function () {
  const message = "browser-event-checker: pagehide!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

window.addEventListener('blur', function () {
  const message = "browser-event-checker: blur!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    const message = "browser-event-checker: document hidden!";
    console.log(message);
    pushLocalStrage(message).then(setConsoleStackToNode);
  } else {
    const message = "browser-event-checker: document visible!";
    console.log(message);
    pushLocalStrage(message).then(setConsoleStackToNode);
  }
}, false);
