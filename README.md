# Rock Paper Scissors

A web-based **Rock Paper Scissors** game built as part of [The Odin Project's Foundations Course](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors).

## Description
This project takes the classic terminal-based Rock Paper Scissors game and upgrades it with a fully interactive User Interface (UI). Players compete against the computer in a race to 5 points. The game utilizes JavaScript to handle event-driven logic, DOM manipulation, and dynamic score tracking.

## Features
* **Interactive UI:** Play the game by clicking "Rock", "Paper", or "Scissors" buttons instead of typing into prompts.
* **Dynamic Score Tracking:** The DOM updates in real-time to display the result of the current round and the running score.
* **Game Over State:** The game announces a final winner once the player or the computer reaches 5 points.
* **Reset Functionality:** A reset button allows you to instantly clear the scores and play again without refreshing the browser page.

## Technologies Used
* **HTML:** Semantic structure for the game container and UI elements.
* **CSS:** Styling and Flexbox for perfectly centering the game interface on the screen.
* **JavaScript:** Core game logic, DOM selection (`querySelector`), and asynchronous Event Listeners.

## What I Learned
Building this project was a fantastic hands-on experience with frontend JavaScript. Key takeaways include:
* **DOM Manipulation:** I learned how to bridge the gap between HTML and JavaScript. I practiced selecting specific DOM elements using `querySelector` and modifying their text content and properties dynamically based on game events.
* **Event-Driven Programming:** I transitioned my mindset from using synchronous loops (`while` and `for` loops) to using asynchronous Event Listeners (`addEventListener`), allowing the game to respond naturally to user clicks.