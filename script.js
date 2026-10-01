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
const forgeImage = document.getElementById("forge-image");
const message = document.getElementById("message-box");
// 2. Create the two state variables: heat and swords made.

let heatValue = 0;
let swordsMade = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Cold";
  } else if (heatValue < 70) {
    return "Ready";
  } else {
    return "Roaring";
  }
}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
console.log("forgeImage");
forgeImage.setAttribute("src", "forge-ready.svg");
forgeImage.setAttribute("alt", "it is ready");

const messageBox = document.getElementById("message-box");

function updateForge() {
  heat.textContent = heatValue;
  swordCount.textContent = swordsMade;
  status.textContent = getForgeStatus(heatValue);

  forgeImage.classList.remove("cold", "ready", "roaring");

  if (heatValue < 29) {
    forgeImage.classList.add("cold");
    forgeImage.setAttribute("src", "forge-cold.svg");
    forgeImage.setAttribute("alt", "it is cold");
  } else if (heatValue < 69) {
    forgeImage.classList.add("ready");
    forgeImage.setAttribute("src", "forge-ready.svg");
    forgeImage.setAttribute("alt", "it is ready");
  } else {
    forgeImage.classList.add("roaring");
    forgeImage.setAttribute("src", "forge-roaring.svg");
    forgeImage.setAttribute("alt", "it is roaring");
  }
}

// 5. Write resetForge(). Restore the state, message, and display.
resetForge();

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

// 7. Write makeSword(). Handle both success and insufficient heat.

// 8. Call resetForge() once to start the game.

// Use the tests in ASSIGNMENT.md to check your work.
