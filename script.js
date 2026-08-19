const messages = [
  {
    text: "Sorry i've been like an absent father and neglected you. I'm correcting your homework.",
    image: null
  },

  {
    text: "You looked distressed today. Everything okay?",
    image: null
  },

  {
    text: "It's cold, brought you a jacket. Don't get sick.",
    image: null
  },

  {
    text: "You forgot this in my house... Will you come over soon?",
    image: images/bracelet.jpg
  },

  {
    text: "Do yuo want. cofe ??",
    image: null
  },

  {
    text: "It looks pretty today. 당신처럼요.",
    image: images/cheri.jpg
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
