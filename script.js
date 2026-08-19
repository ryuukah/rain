const messages = [
  {
    text: "who is Flo and why is he texting you about your period",
    image: null
  },

  {
    text: "Gaul says hi",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
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

  card.classList.remove("show");
  card.classList.add("hide");

  setTimeout(() => {

    const current = messages[index];

    message.textContent = current.text;

    if (current.image) {

      message.style.display = "flex";

      imageContainer.style.display = "block";
      messageImage.src = current.image;

    } else {

      imageContainer.style.display = "none";
      messageImage.src = "";

    }

    card.classList.remove("hide");
    card.classList.add("show");

  }, 250);
}


/*
   Change message every 1.5 seconds
*/

setInterval(() => {

  currentMessage++;

  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }

  showMessage(currentMessage);

}, 1500);


/*
   Start animation
*/

card.classList.add("show");
