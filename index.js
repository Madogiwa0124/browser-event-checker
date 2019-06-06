let consoleNode = document.getElementById('console');
const initConsoleStack = window.localStorage.getItem('consoleStack')
let consoleStack = initConsoleStack ? initConsoleStack.split(',') : []

window.addEventListener('load', function () {
  const message = "browser-event-checker: load!";
  console.log(message);
  alert(message)
  consoleStack.push(message)
  consoleNode.innerHTML = consoleStack.join('</br>');
})

window.addEventListener('focus', function () {
  const message = "browser-event-checker: focus!";
  console.log(message);
  consoleStack.push(message)
  consoleNode.innerHTML = consoleStack.join('</br>');
})

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  const message = "browser-event-checker: beforeunload!";
  console.log(message);
  consoleStack.push(message)
  consoleNode.innerHTML = consoleStack.join('</br>');
  window.localStorage.setItem('consoleStack', consoleStack)
  event.returnValue = '';
})

window.addEventListener('pagehide', function (event) {
  event.preventDefault();
  const message = "browser-event-checker: pagehide!";
  console.log(message);
  consoleStack.push(message)
  consoleNode.innerHTML = consoleStack.join('</br>');
  window.localStorage.setItem('consoleStack', consoleStack)
  event.returnValue = '';
})

window.addEventListener('blur', function (event) {
  event.preventDefault();
  const message = "browser-event-checker: blur!";
  console.log(message);
  consoleStack.push(message)
  consoleNode.innerHTML = consoleStack.join('</br>');
  window.localStorage.setItem('consoleStack', consoleStack)
  event.returnValue = '';
})
