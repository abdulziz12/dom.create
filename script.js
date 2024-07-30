// Prompt the user to enter their name
const userName = prompt("Ismingizni kiriting:");

// Select the container where the name will be displayed
const nameContainer = document.getElementById('name-container');

// Display the name in the container
if (userName) {
  nameContainer.innerHTML = `<h1>Salom, ${userName}!</h1>`;
} else {
  nameContainer.innerHTML = `<h1>Ismingizni kiriting!</h1>`;
}
