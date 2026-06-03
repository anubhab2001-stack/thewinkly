function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy link: ", err);
  });
}