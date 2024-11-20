// Handle simple chat functionality for the demo
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

// Add an event listener to the "Send" button
sendButton.addEventListener('click', function () {
  const message = chatInput.value.trim();

  if (message !== "") {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatInput.value = ''; // Clear input field after sending
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
  }
});

// Handle the login form submission (for demo purposes, just alerting)
document.getElementById('login-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Logged in with email: ${email}`);
});

// Handle the signup form submission (for demo purposes, just alerting)
document.getElementById('signup-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Signed up with username: ${username}, email: ${email}`);
});
