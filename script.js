document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('#btnMain, #btnClose');
  const confettiSettings = {
    particleCount: 1000,
    spread: 180
  };
  buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      const rect = button.getBoundingClientRect();
      const x = rect.left + (rect.width / 2);
      const y = rect.top + (rect.height / 2);
      confettiSettings.origin = {
        x: x / window.innerWidth,
        y: y / window.innerHeight
      };
      confetti(confettiSettings);
    });
  });
});
