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
document.querySelector(".messages-list").style.display = "none";

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = event.target.name.value;
  const userEmail = event.currentTarget.email.value;
  const userMessage = event.currentTarget.message.value;
  console.log(userName, userEmail, userMessage);
  let messageSection = document.querySelector(".messages");
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
  document.querySelector(".messages-list").style.display = "block";
});

var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/lis-anna/repos");
githubRequest.send();

githubRequest.addEventListener("load", function () {
  var repositories = JSON.parse(this.response);
  console.log(repositories);
  let projectSection = document.getElementById("projects");
  let projectList = projectSection.querySelector("ul");
  getProjects(repositories, projectList);
});
function getProjects(array, list) {
  for (let i = 0; i < array.length; i++) {
    let project = document.createElement("li");
    let link = document.createElement("a");
    link.href = `${array[i].html_url}`;
    link.innerHTML = `${array[i].name}`;
    project.appendChild(link);
    list.appendChild(project);
  }
}
