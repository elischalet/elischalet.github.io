// Only one piece plays at a time.
document.addEventListener("play", function (e) {
  document.querySelectorAll("audio").forEach(function (a) {
    if (a !== e.target) a.pause();
  });
}, true);

