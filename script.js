// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
let pImage = document.getElementById("poster-image");
let pTitle = document.getElementById("poster-title");
let pQuote = document.getElementById("poster-quote");

let enteredTitle = document.getElementById("poster-form-title");
let enteredQuote = document.getElementById("poster-form-quote");
let enteredImg = document.getElementById("poster-form-image");


// Array of predefined poster objects
const posters = [
  {
    image: "./images/believe.png",
    title: "Believe & Succeed",
    quote:
      "Success is a journey. Whatever your faith, it is your determination to succeed that will get you there",
  },
  {
    image: "./images/excellence.png",
    title: "Excellence",
    quote:
      "The will to win, the desire to succeed, the urge to reach your full potential…these are the keys that will unlock the door to personal excellence.",
  },
  {
    image: "./images/leadership.png",
    title: "Leadership",
    quote:
      "A leader without followers is simply someone taking a walk. Be a leader others will follow.",
  },
  {
    image: "./images/mindset.png",
    title: "Healthy Mindset",
    quote: "Mindset is everything",
  },
  {
    image: "./images/optimism.png",
    title: "Optimism",
    quote:
      "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
  },
  {
    image: "./images/positivity.png",
    title: "Positive Thinking",
    quote:
      "A positive mind looks for ways IT CAN BE DONE; A negative mind looks for ways it can't be done.",
  },
  // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked
let randomBtn = document.getElementById("randomize");
randomBtn.addEventListener("click", generateRandomPoster);

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", generateCustomPoster);

// Function to generate a random poster
function generateRandomPoster() {
  // TODO: Generate a random index within the range of the posters array length
  // TODO: Retrieve the random poster object from the posters array
  // TODO: Call the function to update the DOM with the values from the random poster object
  console.log(posters);
  //alert("You clicked on " + this.textContent);

  let randomIndex = Math.floor(Math.random() * posters.length);
  //console.log(randomIndex)

  //console.log(posters[randomIndex])

  let updatedImage = posters[randomIndex].image;
  let updatedTitle = posters[randomIndex].title;
  let updatedQuote = posters[randomIndex].quote;

  //   console.log(updatedImage)
  //   console.log(updatedTitle)
  //   console.log(updatedQuote)
  updatePoster(updatedImage, updatedTitle, updatedQuote);
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();
  // TODO: Retrieve the entered quote and author from the input fields

  //   let enteredTitle = document.getElementById("poster-form-title").value;
  //   let enteredQuote = document.getElementById("poster-form-quote").value;
  //   let enteredImg = document.getElementById("poster-form-image").value;


  // TODO: Create a custom poster object with the entered values
  const posterObj = {
    image: enteredImg.value,
    title: enteredTitle.value,
    quote: enteredQuote.value,
  };

  // TODO: Call the function to update the DOM with the values from the custom poster object
  updatePoster(posterObj.image, posterObj.title, posterObj.quote);
}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
  // TODO: Update the DOM with the values provided for the poster image, title, and quote

  //   document.getElementById("poster-image").src = imageUrl;
  //   document.getElementById("poster-title").innerHTML = title;
  //   document.getElementById("poster-quote").innerHTML = quote;
  pImage.src = imageUrl;
  pTitle.innerHTML = title;
  pQuote.innerHTML = quote;
}
