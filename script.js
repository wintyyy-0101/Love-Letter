const revealBtn = document.getElementById('revealBtn');
const letter = document.getElementById('letter');
const floating = document.getElementById('floating');

// Floating emojis (hearts + flowers)
const symbols = ['💖','💞','💐','🌸','🌷','🌹','💗','💘','🌼'];

function createFloating() {
  const span = document.createElement('span');
  span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.animationDuration = 8 + Math.random() * 6 + 's';
  span.style.fontSize = 20 + Math.random() * 30 + 'px';
  floating.appendChild(span);

  setTimeout(() => span.remove(), 12000);
}

setInterval(createFloating, 400);

revealBtn.addEventListener('click', () => {
  if (letter.style.display === "block") {
    letter.style.display = "none";
    revealBtn.innerText = "Open the Letter 💖";
  } else {
    letter.style.display = "block";
    revealBtn.innerText = "Hide the Letter 💌";
  }
});
