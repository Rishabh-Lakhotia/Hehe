const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Hehe! Of course she is cute!";
  gif.src =
    "https://www.alamy.com/falling-in-love-emoji-isolated-on-white-background-heart-shaped-eyes-emoticon-tongue-3d-rendering-image371508139.html?imageid=B6F23185-86AF-495B-A04A-9057D05D31BD&p=272418&pn=1&searchId=f500077914da913fa8da2cb38be5e6fd&searchtype=0";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});