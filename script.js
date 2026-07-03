function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy link: ", err);
  });
}

let dwValue = 0;
function darkWhite(){
  const header = document.querySelector('header');
  const dwButton = document.querySelector('#dark-white');
  if (dwValue == 0){
    dwValue = 1;
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    header.style.background = "linear-gradient(120deg, lightgreen, black)";
    dwButton.src = "white.svg";
  }
  else if (dwValue == 1){
    dwValue = 0;
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    header.style.background = "linear-gradient(120deg, red, red)";
    dwButton.src = "dark.svg";
  }
}
