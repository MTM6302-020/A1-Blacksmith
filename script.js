// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

document.title = "Blacksmith - The Tiny Forge";
console.log("Blacksmith - The Tiny Forge");

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

const forge = document.getElementById("forge");
const heat = document.getElementById("heat-value");
const swordCount = document.getElementById("sword-count");
const status = document.getElementById("forge-status");
const image = document.getElementById("forge-image");
const message = document.getElementById("message-box");
// 2. Create the two state variables: heat and swords made.

let heatValue = 0;
let swordsMade = 0;

function getForgeStatus(heatValue) {
  if (heatValue < 0) {
    return "Frozen";
  } else if (heatValue < 50) {
    return "Cold";
  } else if (heatValue < 100) {
    return "Warm";
  } else {
    return "Hot";
  }
}

console.log(getForgeStatus(-10));
console.log(getForgeStatus(25));
console.log(getForgeStatus(75));
console.log(getForgeStatus(120));

// 3. Write getForgeStatus(heatValue). Return the correct status string.

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

// 5. Write resetForge(). Restore the state, message, and display.

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

// 7. Write makeSword(). Handle both success and insufficient heat.

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.
