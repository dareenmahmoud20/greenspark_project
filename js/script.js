/**
 * Group Members: Jeshua Herrera, Dareen Mahmound
 * File Name: script.js
 * Date: 06/22/2025
 */


const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('show');
});

document.querySelector('.toggle-group').addEventListener('click', e => {
  if (!e.target.matches('button[data-target]')) return;
  const id = e.target.getAttribute('data-target');
  document.querySelectorAll('.toggle-content').forEach(div => {
    if (div.id === id) {
      div.style.display = div.style.display === 'block' ? 'none' : 'block';
    } else {
      div.style.display = 'none';
    }
  });
});

