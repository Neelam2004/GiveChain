document.getElementById("walletConnectBtn").addEventListener("click", () => {
  document.getElementById("walletModal").style.display = "flex";
});

function closeWalletModal() {
  document.getElementById("walletModal").style.display = "none";
}

function connectWallet() {
  // Simulated connection
  alert("Wallet connected successfully!");
  document.getElementById("walletConnectBtn").innerText = "Wallet Connected";
  closeWalletModal();
}

const backgroundImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Tiv-Oky55rBdrg0bJJuefUhr2bWEwENIAA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42sQE6U21eNAJLD3ekXtQSy-wDXBgaW5Q8Q&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvlXgy--nEvfPD5tyPB_lNYiL0GuyhyBnEA&s'
];

let currentIndex = 0;
const heroSection = document.querySelector('.changing-bg');

function changeBackground() {
  heroSection.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Initial background
changeBackground();

// Change every 3 seconds
setInterval(changeBackground, 5000);

// AOS Initialization
AOS.init({
    duration: 1000,
    once: true
  });
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });
  
  
  // ScrollReveal Animations
  ScrollReveal().reveal('.feature, .cause, .account-form', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });
  // Burger menu functionality
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Wallet Connect Popup (basic)
const walletBtn = document.getElementById('walletConnectBtn');

walletBtn.addEventListener('click', () => {
  alert('Wallet Connect Coming Soon! 🔥');
});

function sendDonation() {
  fetch('http://localhost:5000/donate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      walletAddress: '0xABC123',
      amount: 100,
      cause: 'Food for All'
    }),
  })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => console.error(err));
}

function sendDonation() {
  fetch('http://localhost:5000/donate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      walletAddress: '0xABC123',
      amount: 250,
      cause: 'Child Education'
    }),
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error:', err));
}


