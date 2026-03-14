const Hearts = ["❤️", "💕", "💖", "💗", "🩷"];
const Fire = ["😈","👻","🔥", "🔥"]


function dropEmojis(type) {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => createAnimation(type), i * 80);
  }
}

function createAnimation(type) {
  const element = document.createElement("div");
  element.className = "heart";
  element.textContent = type[Math.floor(Math.random() * type.length)];
  element.style.cssText = `
    left: ${Math.random() * 100}vw;
    top: -40px;
    font-size: ${Math.random() * 18 + 14}px;
    animation-duration: ${Math.random() * 2 + 2}s;
  `;
  document.body.appendChild(element);
  element.addEventListener("animationend", () => element.remove());
}

window.addEventListener("load", () => {

  const mode = document.body.dataset.animation

  if(mode == "auto"){
  dropEmojis(Fire);
  setInterval(()=>dropEmojis(Fire), 3000);
  } // drops every 3 seconds
});