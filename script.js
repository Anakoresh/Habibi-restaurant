document.addEventListener('DOMContentLoaded', function() {
  const activeSection = document.querySelector('#food-menu a.active'); 

  if (activeSection) {
    activeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
