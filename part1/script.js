// script.js
// Name: Keenan
// File: script.js
// Date: 31 March 2026
// Fully working Random Story Generator with custom name and UK conversions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

// Helper function to pick a random value from an array
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Story data arrays (must match rubric: insertX, insertY, insertZ)
const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away"
];

// Generate random story
function returnRandomStoryString() {
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  const storyText = `It was 94 Fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Generate story and update the DOM
function generateStory() {
  let newStory = returnRandomStoryString();

  // Replace "Bob" with custom name if entered
  if (customName.value !== "") {
    newStory = newStory.replace("Bob", customName.value);
  }

  // Convert to UK units if "UK" radio is selected
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round((94 - 32) * 5 / 9) + " Celsius";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  // Display the story
  story.textContent = newStory;
  story.style.visibility = "visible";
}

// Attach event listener
generateBtn.addEventListener("click", generateStory);
