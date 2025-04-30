document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, {
      threshold: 0.2,
    });
  
    elements.forEach(element => observer.observe(element));
  });
  