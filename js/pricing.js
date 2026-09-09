// Keep the flip interaction usable on touch devices while preserving hover/focus on desktop.
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', event => {
    // Let links on the back of the card work normally.
    if (event.target.closest('a')) return;

    if (window.matchMedia('(hover: none)').matches) {
      card.classList.toggle('is-flipped');
    }
  });

  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.classList.toggle('is-flipped');
    }
  });
});
