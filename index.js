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
    consoleStack.push(consoleStack.length + ': ' + message);
    window.localStorage.setItem('consoleStack', consoleStack);
    resolve();
  })
}

function setConsoleStackToNode() {
  consoleNode.innerHTML = consoleStack.join('</br>');
}

window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    const message = "browser-event-checker: window pageshow! source from cache";
    console.log(message);
    pushLocalStrage(message).then(setConsoleStackToNode);
  } else {
    const message = "browser-event-checker: window pageshow! source from server";
    console.log(message);
    pushLocalStrage(message).then(setConsoleStackToNode);
  }
})

window.addEventListener('load', function () {
  const message = "browser-event-checker: window load!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

window.addEventListener('focus', function () {
  const message = "browser-event-checker: window focus!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

window.addEventListener('beforeunload', function () {
  const message = "browser-event-checker: window beforeunload!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

window.addEventListener('pagehide', function () {
  const message = "browser-event-checker: window pagehide!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

window.addEventListener('blur', function () {
  const message = "browser-event-checker: window blur!";
  console.log(message);
  pushLocalStrage(message).then(setConsoleStackToNode);
})

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    const message = "browser-event-checker: document visibilitychange(hidden!)";
    console.log(message);
    pushLocalStrage(message).then(setConsoleStackToNode);
  } else {
    const message = "browser-event-checker: document visibilitychange(visible!)";
    console.log(message);
    pushLocalStrage(message).then(setConsoleStackToNode);
  }
}, false);
