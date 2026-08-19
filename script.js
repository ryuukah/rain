const messages = [
  {
    text: "who is Flo and why is he texting you about your period",
    image: null
  },

  {
    text: "Gaul says hi",
    image: null
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


/* SHOW MESSAGE */

function showMessage(index) {

  const current = messages[index];

  card.classList.remove("show");
  card.classList.add("hide");

  setTimeout(() => {

    message.textContent = current.text;

    if (current.image) {

      imageContainer.style.display = "block";
      messageImage.src = current.image;

    } else {

      imageContainer.style.display = "none";
      messageImage.src = "";

    }

    card.classList.remove("hide");
    card.classList.add("show");

  }, 150);
}


/* CLICK = NEXT MESSAGE */

card.addEventListener("click", function () {

  currentMessage++;

  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }

  showMessage(currentMessage);

});


/* FIRST MESSAGE */

card.classList.add("show");
