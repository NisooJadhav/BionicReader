function bionicRead() {
  let textarea = document.getElementById("textarea");
  let paragraph = textarea.value;
  
  // Check if the input is empty
  if (paragraph.trim() === "") {
    alert("Please enter some text.");
    return;
  }

  let words = paragraph.split(/\s+/);
  let formattedParagraph = "";
  for (let i = 0; i < words.length; i++) {
    let half = words[i].substr(0, Math.round(words[i].length / 2));
    let remHalf = words[i].substr(Math.round(words[i].length / 2));
    formattedParagraph += "<strong>" + half + "</strong>" + remHalf + " ";
  }
  document.getElementById("below").innerHTML = formattedParagraph;
}

// Add keyboard shortcut to trigger the function
document.getElementById("textarea").addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    bionicRead();
    event.preventDefault(); // Prevent the default behavior of the Enter key
  }
});
