function bionicRead() {
  let textarea = document.getElementById("textarea");
  let paragraph = textarea.value;
  let words = paragraph.split(/\s+/);
  let formattedParagraph = "";
  for (let i = 0; i < words.length; i++) {
    let half = words[i].substr(0, Math.round(words[i].length / 2));
    let remHalf = words[i].substr(Math.round(words[i].length / 2));
    formattedParagraph += "<strong>" + half + "</strong>" + remHalf + " ";
  }
  document.getElementById("below").innerHTML = formattedParagraph;
}