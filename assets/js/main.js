// Lazy-load hero background
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  const src = heroBg.style.backgroundImage.slice(5, -2);
  const img = new Image();
  img.src = src;
  img.onload = () => heroBg.classList.add('loaded');
}

// Contact form handler
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    fetch('https://formspree.io/f/YOUR_ID', {  // Replace with actual endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(() => { alert('Thank you! We will be in touch.'); form.reset(); })
    .catch(() => alert('Error sending message.'));
  });
}

// Leaflet Map
const mapEl = document.getElementById('map');
if (mapEl) {
  const map = L.map('map').setView([8.501772,76.9618218], 13); // Vizhinjam
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker([8.501772,76.9618218]).addTo(map)
    .bindPopup('ABBA Developers').openPopup();
}