/**
 * This will populate time string in ISO format
 * @param {string} timerDivId Div id where time need to printed.
 * @returns void;
 */

function resetClock(timerDivId) {
  const timerDiv = document.querySelector('#' + (timerDivId || 'timer'));
  timerDiv.innerText = new Date().toISOString();

  setTimeout(resetClock, 1000, timerDivId);
}
