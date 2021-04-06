var skills = document.querySelectorAll('.skillLevel');
skills.forEach(function (skill) { return skill.style.width = skill.dataset.width + "%"; });
// back to top button
var backToTopButt = document.querySelector('.backToTop');
backToTopButt.addEventListener('click', function () { return window.scroll(0, 0); });
