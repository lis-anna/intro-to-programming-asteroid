let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("#ftr-copyright");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy;Anna Liskovets  ${thisYear}`;
footer.appendChild(copyright);

let skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "HTML",
  "SQL",
  "Jira",
  "Confluence",
  "Problem Solving",
  "Agile Management",
  "Business Analysis",
];

let skillSection = document.querySelector("#skills");
let skillList = skillSection.querySelector("ul");

for (let count of skills) {
  let skill = document.createElement("li");
  skill.innerHTML = count;
  skillList.appendChild(skill);
}

let messageForm = document.querySelector("#leave_message");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = event.target.name.value;
  const userEmail = event.currentTarget.email.value;
  const userMessage = event.currentTarget.message.value;
  console.log(userName, userEmail, userMessage);
  let messageSection = document.querySelector("#messages");
  let messageList = messageSection.querySelector("ul");
  let newMesssage = document.createElement("li");
  newMesssage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> wrote: <span>${userMessage}</span> <br>`;
  let removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", (event) => {
    let entry = event.target.parentNode;
    entry.remove();
  });
  newMesssage.appendChild(removeButton);
  messageList.appendChild(newMesssage);
  event.target.reset();
});
