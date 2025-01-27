"use strict";

// Step 1: Set up a gameRunning boolean variable to control the game loop
let gameRunning = true;

// Start the game loop
while (gameRunning) {
    // Step 2: Generate a random number between 0 and 100
    const targetNumber = Math.floor(Math.random() * 101); // Math.random generates a number between 0 and 1

    // Step 3: Use a while loop to let the user keep guessing until they get it right
    let guessedCorrectly = false; // To track whether the correct number has been guessed

    while (!guessedCorrectly) {
        // Step 4: Prompt the user for their guess
        const userGuess = parseInt(prompt("Guess a number between 0 and 100:"), 10);

        // Step 5: Compare the user's guess with the target number
        if (userGuess === targetNumber) {
            // If the guess is correct
            console.log("Congratulations! You guessed the correct number!");
            alert("Congratulations! You guessed the correct number!");
            guessedCorrectly = true; // Exit the inner loop
        } else if (userGuess < targetNumber) {
            // If the guess is too low
            console.log("Too low! Try guessing a higher number.");
        } else if (userGuess > targetNumber) {
            // If the guess is too high
            console.log("Too high! Try guessing a lower number.");
        } else {
            // Handle invalid input
            console.log("Please enter a valid number.");
        }
    }

    // Step 7: Ask the user if they want to play again
    const playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (playAgain !== "yes") {
        gameRunning = false; // Exit the outer loop
        alert("Thanks for playing! Goodbye!");
    }
}
