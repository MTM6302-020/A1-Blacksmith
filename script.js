// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

// Will create different functions that will help manage the forge
// heat in order to make swords based on the heat value

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
const actionMessage = document.getElementById("action-message");
const color = document.querySelector("forge-top");
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
forgeImage.setAttribute("src", "assets/forge-ready.svg");
forgeImage.setAttribute("alt", "it is ready");

function updateForge() {
  heat.textContent = heatValue;
  swordCount.textContent = swordsMade;

  forgeImage.classList.remove("cold", "ready", "roaring");

  if (heatValue < 30) {
    forgeImage.classList.add("cold");
    forgeImage.setAttribute("src", "assets/forge-cold.svg");
    forgeImage.setAttribute("alt", "it is cold");
  } else if (heatValue < 70) {
    forgeImage.classList.add("ready");
    forgeImage.setAttribute("src", "assets/forge-ready.svg");
    forgeImage.setAttribute("alt", "it is ready");
  } else {
    forgeImage.classList.add("roaring");
    forgeImage.setAttribute("src", "assets/forge-roaring.svg");
    forgeImage.setAttribute("alt", "it is roaring");
    color.setAttribute("style", "background-color: yellow");
  }
}

// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
  heatValue = 0;
  swordsMade = 0;
  updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount) {
  heatValue += amount;
  heatValue = Math.min(heatValue, 100);
  status.textContent = getForgeStatus(heatValue);
  actionMessage.textContent = `You added ${amount} heat to the forge.`;
  updateForge();
}

// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword() {
  if (heatValue >= 70) {
    swordsMade++;
    heatValue -= 30;
    actionMessage.textContent = "You made a sword!";
  } else {
    actionMessage.textContent = "Not enough heat to make a sword.";
  }
  updateForge();
}

let heatButton = document.getElementById("heat-button");
heatButton.addEventListener("click", function () {
  heatForge(10);
});

let makeSwordButton = document.getElementById("make-sword-button");
makeSwordButton.addEventListener("click", function () {
  makeSword();
});

// 8. Call resetForge() once to start the game.
resetForge();

// Use the tests in ASSIGNMENT.md to check your work.
