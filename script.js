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
  const footer = document.querySelector('footer');
  const dwButton = document.querySelector('.dark-white-button');
  const archiveDw = document.querySelectorAll('.archive-section h3 a')
  console.log(archiveDw[0]);
  if (dwValue == 0){
    dwValue = 1;
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    header.style.background = "linear-gradient(120deg, lightgreen, black)";
    footer.style.background = "linear-gradient(120deg, rgb(98, 255, 0), rgb(127, 234, 255))";
    dwButton.src = "dark.svg";
    for(let i = 0; i < archiveDw.length; i++){
      archiveDw[i].style.color = "white";
    }
  }
  else if (dwValue == 1){
    dwValue = 0;
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    header.style.background = "linear-gradient(120deg, red, red)";
    footer.style.background = "linear-gradient(120deg, rgb(255, 85, 0), rgb(182, 127, 255)";
    dwButton.src = "white.svg";
    for(let i = 0; i <= archiveDw.length; i++){
      archiveDw[i].style.color = "black";
    }
  }
}
