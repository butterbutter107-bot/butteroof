document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
    });
  });

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    alert(name + '님, 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    contactForm.reset();
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.section').forEach(function (section) {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  var style = document.createElement('style');
  style.textContent =
    '.fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }' +
    '.fade-in.visible { opacity: 1; transform: translateY(0); }';
  document.head.appendChild(style);
});
