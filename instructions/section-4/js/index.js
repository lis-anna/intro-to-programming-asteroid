let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("#ftr-copyright");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy;Anna Liskovets  ${thisYear}`;
footer.appendChild(copyright);

let skills = [
  "creativity",
  "critical thinking",
  "analytical skills",
  "HTML",
  "CSS",
  "JavaScript",
];

let skillSection = document.querySelector("#skills");
let skillList = skillSection.querySelector("ul");

for (let count of skills) {
  let skill = document.createElement("li");
  skill.innerHTML = count;
  skillList.appendChild(skill);
}
