var skills = document.querySelectorAll('.skillLevel');
skills.forEach(function (skill) { return skill.style.width = skill.dataset.width + "%"; });
