const skills = document.querySelectorAll<HTMLElement>('.skillLevel');

skills.forEach((skill) => skill.style.width = `${skill.dataset.width}%`);