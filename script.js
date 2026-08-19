const messages = [
  {
    text: "who is Flo and why is he texting you about your period",
    image: null
  },

  {
    text: "Gaul says hi",
    image: "images/gaul.jpg"
  },

  {
    text: "It's cold, bring a jacket",
    image: null
  },

  {
    text: "Do you want... a matcha",
    image: null
  },

  {
    text: "who is Cloud Strife",
    image: null
  }
];

const card = document.getElementById("messageCard");
const message = document.getElementById("message");
const imageContainer = document.getElementById("imageContainer");
const messageImage = document.getElementById("messageImage");

let currentMessage = 0;

function showMessage(index) {

  // Small fade-out
  card.classList.remove("show");
  card.classList.add("hide");

  setTimeout(() => {

    const current = messages[index];

    // Change text
    message.textContent = current.text;

    // Change/remove image
    if (current.image) {
      imageContainer.style.display = "block";
      messageImage.src = current.image;
    } else {
      imageContainer.style.display = "none";
      messageImage.src = "";
    }

    // Fade back in
    card.classList.remove("hide");
    card.classList.add("show");

  }, 200);
}


/*
   CLICK THE MESSAGE TO CHANGE IT
*/

card.addEventListener("click", () => {

  currentMessage++;

  // Go back to the first message after the last one
  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }

  showMessage(currentMessage);

});


/*
   Start with the first message
*/

showMessage(0);
