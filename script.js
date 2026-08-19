const messages = [

  {
    text: "Sorry i've been like an absent father and neglected you. I'm correcting your homework",
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
    image: "bracelet.jpg"
  },

  {
    text: "Do yuo want. cofe ??",
    image: null
  },

  {
    text: "It looks pretty today. 당신처럼요.",
    image: "cheri.jpg"
  }

];


const card = document.getElementById("messageCard");
const message = document.getElementById("message");

const imageContainer = document.getElementById("imageContainer");
const messageImage = document.getElementById("messageImage");

let currentMessage = 0;


/* DISPLAY MESSAGE */

function showMessage(index) {

  const current = messages[index];

  /*
    Fade out
  */

  card.classList.remove("show");
  card.classList.add("hide");


  setTimeout(() => {

    /*
      Change text
    */

    message.textContent = current.text;


    /*
      Handle image
    */

    if (current.image !== null) {

      messageImage.src = current.image;

      imageContainer.style.display = "block";

      /*
        If the image cannot be found,
        hide the image instead of breaking
        the message system.
      */

      messageImage.onerror = function () {
        imageContainer.style.display = "none";
      };

    } else {

      imageContainer.style.display = "none";

      messageImage.removeAttribute("src");

    }


    /*
      Fade back in
    */

    card.classList.remove("hide");
    card.classList.add("show");

  }, 150);

}


/* CLICK CARD = NEXT MESSAGE */

card.addEventListener("click", function () {

  currentMessage++;

  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }

  showMessage(currentMessage);

});


/* FIRST MESSAGE */

showMessage(0);
