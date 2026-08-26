function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy link: ", err);
  });
}

let dwValue = 1;
function darkWhite(){
  const header = document.querySelector('header');
  const dwButton = document.querySelector('#dark-white');
  if (dwValue == 0){
    dwValue = 1;
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    header.style.background = "linear-gradient(rgba(25, 25, 112, 0.2), rgba(0, 0, 0, 0.5)), url('Ross.jpeg')";
    header.style.backgroundPosition ='center';
    header.style.backgroundSize = 'cover';
    dwButton.src = "white.svg";
  }
  else if (dwValue == 1){
    dwValue = 0;
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    header.style.background = "linear-gradient(rgba(25, 25, 112, 0.1), rgba(25, 25, 112, 0.1)), url('Ross.jpeg')";
    header.style.backgroundPosition ='center';
    header.style.backgroundSize = 'cover';
    dwButton.src = "dark.svg";
  }
}
