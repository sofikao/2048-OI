// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  localStorage.clear();
  document.getElementById('start').click();
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
