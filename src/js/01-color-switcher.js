
const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


  let interval; 
  buttonStart.addEventListener("click", () => {
    interval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
        }, 1000);
        buttonStart.disabled = true;
        buttonStop.disabled = false;  
  })

  buttonStop.addEventListener("click", () => {
    clearInterval(interval);
    buttonStart.disabled = false;
      buttonStop.disabled = true;
  })


