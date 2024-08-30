const UserInput = document.querySelector(".user-input");
const message = document.querySelector(".message");
const hint = document.querySelector(".hint");
const startGame = document.querySelector(".start-game");
const themeButton = document.querySelector(".theme");
const formTag = document.querySelector("form");

// Generate a random number between 1 and 100
let RandomNumber = Math.round(Math.random() * 100) + 1;

// Initialize an array to store user guesses
let guesses = [];
guesses.push("Guesses: ");

// Event listener for form submission
formTag.addEventListener("submit", (e) => {
    e.preventDefault();

    // Parse the user input as an integer
    let userInputValue = parseInt(UserInput.value, 10);

    // Add the user input to the guesses array
    guesses.push(userInputValue);

    // Check if the user input matches the random number
    if (userInputValue === RandomNumber) {
        message.innerHTML = `Correct!`;
        hint.innerHTML = guesses.join(' / ');
        startGame.disabled = false;
        startGame.classList.add("restart");
    } else if (userInputValue > RandomNumber) {
        message.innerHTML = `Too high, try again`;
        hint.innerHTML = guesses.join(' / ');
    } else {
        message.innerHTML = `Too low, try again`;
        hint.innerHTML = guesses.join(' / ');
    }

    // Clear the input field
    UserInput.value = "";
});

// Event listener for start game button
startGame.addEventListener("click", () => {
    // Reset the game
    RandomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    guesses.push("Guesses: ");
    hint.innerHTML = "";
    message.innerHTML = "Guess a number between 1 and 100";
    startGame.disabled = true;
    startGame.classList.remove("restart");
});

// Event listener for theme button
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Set GitHub link
const gitLink = document.querySelector(".gitLink");
gitLink.href = "https://github.com/MOHDDANISH007?tab=repositories";



// UseLess Code
// startGame.addEventListener("click", () => {
//     // Reset the game
//     RandomNumber = Math.floor(Math.random() * 100) + 1;
//     guesses = [];
//     guesses.push("Guesses: ");
//     hint.innerHTML = "";
//     message.innerHTML = "Guess a number between 1 and 100";
//     startGame.disabled = true;
//     startGame.classList.remove("restart");
// });

// // Event listener for theme button
// themeButton.addEventListener("click", () => {
//     document.body.classList.toggle("dark-theme");
// });

// // Set GitHub link
// const gitLink = document.querySelector(".gitLink");
// gitLink.href = "https://github.com/MOHDDANISH007?tab=repositories";



// startGame.addEventListener("click", () => {
//     // Reset the game
//     RandomNumber = Math.floor(Math.random() * 100) + 1;
//     guesses = [];
//     guesses.push("Guesses: ");
//     hint.innerHTML = "";
//     message.innerHTML = "Guess a number between 1 and 100";
//     startGame.disabled = true;
//     startGame.classList.remove("restart");
// });

// // Event listener for theme button
// themeButton.addEventListener("click", () => {
//     document.body.classList.toggle("dark-theme");
// });

// // Set GitHub link
// const gitLink = document.querySelector(".gitLink");
// gitLink.href = "https://github.com/MOHDDANISH007?tab=repositories";


