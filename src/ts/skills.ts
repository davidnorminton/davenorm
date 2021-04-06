const skills = document.querySelectorAll<HTMLElement>('.skillLevel');

skills.forEach((skill) => skill.style.width = `${skill.dataset.width}%`);

// back to top button
const backToTopButt = document.querySelector('.backToTop');
backToTopButt.addEventListener('click', () => window.scroll(0, 0));