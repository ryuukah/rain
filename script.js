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
    image: "photo1.jpg"
  },

  {
    text: "Do yuo want. cofe ??",
    image: null
  },

  {
    text: "It looks pretty today. 당신처럼요.",
    image: "photo2.jpg"
  }

];


const card = document.getElementById("messageCard");
const contentWrapper = document.getElementById("contentWrapper");

const message = document.getElementById("message");

const imageContainer =
  document.getElementById("imageContainer");

const messageImage =
  document.getElementById("messageImage");


let currentMessage = 0;

let isChanging = false;


/* =========================================================
   HEIGHT CALCULATION
========================================================= */

function getContentHeight() {

  /*
    Temporarily let the card determine its natural height.
  */

  card.style.height = "auto";

  /*
    offsetHeight gives us the exact rendered height,
    including padding and header.
  */

  return card.scrollHeight;
}


/* =========================================================
   SET CARD HEIGHT
========================================================= */

function setCardHeight() {

  const height = getContentHeight();

  card.style.height = `${height}px`;
}


/* =========================================================
   DISPLAY MESSAGE
========================================================= */

function updateMessage(index) {

  const current = messages[index];

  /*
    Start cross-fade.
  */

  contentWrapper.classList.add("fading");


  /*
    Wait for the opacity transition to begin.
  */

  setTimeout(() => {

    /*
      Replace the text.
    */

    message.textContent = current.text;


    /*
      Handle image messages.
    */

    if (current.image) {

      imageContainer.style.display = "block";

      messageImage.src = current.image;

    } else {

      imageContainer.style.display = "none";

      messageImage.removeAttribute("src");

    }


    /*
      Wait one frame so the browser has calculated
      the new content dimensions.
    */

    requestAnimationFrame(() => {

      requestAnimationFrame(() => {

        /*
          Calculate the new card height.
        */

        setCardHeight();


        /*
          Bring the content back.
        */

        contentWrapper.classList.remove("fading");

        isChanging = false;

      });

    });

  }, 200);
}


/* =========================================================
   CLICK = NEXT MESSAGE
========================================================= */

card.addEventListener("click", () => {

  /*
    Prevent double-clicks from interrupting
    the height animation.
  */

  if (isChanging) {
    return;
  }

  isChanging = true;


  currentMessage++;

  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }


  updateMessage(currentMessage);

});


/* =========================================================
   IMAGE LOADING
========================================================= */

messageImage.addEventListener("load", () => {

  /*
    Once an image finishes loading, recalculate
    the card because its actual height is now known.
  */

  setCardHeight();

});


/* =========================================================
   IMAGE ERROR
========================================================= */

messageImage.addEventListener("error", () => {

  /*
    If the image filename is wrong or the file
    doesn't exist, don't let the card break.
  */

  imageContainer.style.display = "none";

  setCardHeight();

});


/* =========================================================
   INITIAL MESSAGE
========================================================= */

message.textContent = messages[0].text;

imageContainer.style.display = "none";


/*
  Wait until the browser has rendered everything,
  then calculate the initial card height.
*/

requestAnimationFrame(() => {

  setCardHeight();

  card.style.height = `${card.scrollHeight}px`;

});
