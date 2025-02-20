// ----------------------- Form submission for Google Sheets -----------------------------
const scriptURL = "https://script.google.com/macros/s/AKfycbw9md7GwOQDD8soHe1rfN73ELmxV9CMjqI_L2mxWJGyGkkqe4wXCTqhDJGT4035e7k/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("An error occurred. Please try again.");
    });
});


// ----------------------- Skills data and skill bars -----------------------------------
const skills = [
  { name: "HTML - 5", percentage: 80 },
  { name: "CSS - 3", percentage: 75 },
  { name: "Tailwind", percentage: 50 },
  { name: "JavaScript", percentage: 50 },
];

// Function to create skill bars dynamically
function createSkillBars() {
  const skillsContainer = document.getElementById("skills-list");

  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const skillName = document.createElement("span");
    skillName.classList.add("skill-name");
    skillName.textContent = skill.name;

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const skillPercentage = document.createElement("span");
    skillPercentage.classList.add("skill-percentage");
    skillPercentage.textContent = `${skill.percentage}%`;

    const progress = document.createElement("div");
    progress.classList.add("progress");
    progress.style.width = `0%`;
    setTimeout(() => {
      progress.style.width = `${skill.percentage}%`;
    }, 100);

    progressBar.appendChild(progress);

    skillDiv.appendChild(skillName);
    skillDiv.appendChild(progressBar);
    skillDiv.appendChild(skillPercentage);

    skillsContainer.appendChild(skillDiv);
  });
}

window.onload = createSkillBars();

// ----------------------- Toggle Details in "About" section -----------------------------
function toggleDetails() {
  var lastParagraph = document.querySelector(".about-details-2");
  if (lastParagraph.style.display === "none" || lastParagraph.style.display === "") {
    lastParagraph.style.display = "block";
    document.querySelector(".read-more").innerText = "Read Less";
  } else {
    lastParagraph.style.display = "none";
    document.querySelector(".read-more").innerText = "Read More";
  }
}
// --------------hide paragraph for services read more details---------------------------
function hideDetails1() {
  var lastParagraph = document.querySelector(".services-details-1");
  if (lastParagraph.style.display === "none" || lastParagraph.style.display === "") {
    lastParagraph.style.display = "block";
    document.querySelector(".learn-more-1").innerText = "learn Less";
  } else {
    lastParagraph.style.display = "none";
    document.querySelector(".learn-more-1").innerText = "learn More";
  }
}
function hideDetails2() {
  var lastParagraph = document.querySelector(".services-details-2");
  if (lastParagraph.style.display === "none" || lastParagraph.style.display === "") {
    lastParagraph.style.display = "block";
    document.querySelector(".learn-more-2").innerText = "learn Less";
  } else {
    lastParagraph.style.display = "none";
    document.querySelector(".learn-more-2").innerText = "learn More";
  }
}
function hideDetails3() {
  var lastParagraph = document.querySelector(".services-details-3");
  if (lastParagraph.style.display === "none" || lastParagraph.style.display === "") {
    lastParagraph.style.display = "block";
    document.querySelector(".learn-more-3").innerText = "learn Less";
  } else {
    lastParagraph.style.display = "none";
    document.querySelector(".learn-more-3").innerText = "learn More";
  }
}

// JavaScript to toggle the navigation menu on small screens
function openmenu() {
  document.getElementById("sidemenu").style.right = "0";
  document.querySelector(".fa-bars").style.display = "none";
  document.querySelector(".fa-times").style.display = "block";
}

function closemenu() {
  document.getElementById("sidemenu").style.right = "-200px";
  document.querySelector(".fa-times").style.display = "none";
  document.querySelector(".fa-bars").style.display = "block";
}
function showSideBar() {
  const sidemenu = document.querySelector('.sidemenu');
  sidemenu.style.display = 'block';
}
function hideSideBar() {
  const hidemenu = document.querySelector('.sidemenu');
  hidemenu.style.display = 'none';
}
window.onload = function () {
  document.getElementById("loader").style.display = "none";
}

function sendMail(){
  let params={
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("text").value,
    sumry: document.getElementById("msg").value}

    emailjs.send("service_37kc3qx", "template_jxih8zk", params).then(alert("Email sent successfully!"));
}