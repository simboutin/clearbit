// Define the authorization clearbit API key
const authorization = "Bearer PUT_HERE_YOU_CLEARBIT_KEY";

// Get the elements 
const form = document.querySelector('#clearbitForm');
const input = document.querySelector('#clearbitEmail');

const userName = document.querySelector('#userName');
const bio = document.querySelector('#userBio');
const userEmail = document.querySelector('#userEmail');
const location = document.querySelector('#userLocation');

// Set user infos in the table
const insertUserInfos = (data) => {
  userName.innerHTML = data.name.fullName;
  bio.innerHTML = data.bio;
  userEmail.innerHTML = data.email;
  location.innerHTML = data.geo.country;
};

// Fetch the clearbit API et get the data for the email submitted by the user
const stalkEmail = (email) => {
  const clearbitUrl = `https://person.clearbit.com/v1/people/email/${email}`
  fetch(clearbitUrl, { headers: { Authorization: authorization } })
    .then(response => response.json())
    .then(insertUserInfos);
};

// Reminder : element.addEventListener(EVENT_TYPE, CALLBACK)
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = input.value;
  stalkEmail(email);
});
