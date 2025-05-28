/*

const fs = require('fs');
const fileName = 'DB.txt';

function appendToFile(text) {
  fs.appendFile(fileName, text, (err) => {
    if (err) {
      console.log('Could not append — maybe file does not exist. Trying to create file...');
      
      fs.writeFile(fileName, text, (err) => {
        if (err) {
          console.error('Failed to create and write the file:', err);
          return;
        }
        console.log('File created and text written successfully.');
      });

    } else {
      console.log('Appended successfully.');
    }
  });
}
*/

function login() {
  const name = document.getElementById("username").value;
  
  if (name.trim() !== "") {
    localStorage.setItem("username", name);  // Save the name in localStorage
    document.getElementById("login-form").style.display = "none";  // Hide login form
    document.getElementById("chat").style.display = "block";  // Show chat
    document.getElementById("user-name").innerText = name;  // Display name in chat
  } else {
    alert("Please enter a name");
  }
}

function sendMessage() {
  const message = document.getElementById("message").value;
  const name = localStorage.getItem("username");
  if (message.trim() !== "") {
    appendToFile(name + " " + message);
    const messageElement = document.createElement("div");
    messageElement.textContent = `${name}: ${message}`;
    document.getElementById("messages").appendChild(messageElement);
    document.getElementById("message").value = "";  // Clear input field
  }
}

// Auto-login if a name is already stored
window.onload = function() {
  const name = localStorage.getItem("username");
  if (name) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("chat").style.display = "block";
    document.getElementById("user-name").innerText = name;
  }
}
