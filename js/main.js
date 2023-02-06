document.addEventListener("DOMContentLoaded", function () {
  //Desktop navigation tabs
  document
    .getElementById("experience-tab-desktop")
    .addEventListener("click", (event) => {
      openTopic(event, "Experience", "portfolio");
    });
  document
    .getElementById("techstack-tab-desktop")
    .addEventListener("click", (event) => {
      openTopic(event, "TechStack", "portfolio");
    });
  document
    .getElementById("projects-tab-desktop")
    .addEventListener("click", (event) => {
      openTopic(event, "Projects", "portfolio");
    });
  document
    .getElementById("education-tab-desktop")
    .addEventListener("click", (event) => {
      openTopic(event, "Education", "portfolio");
    });
  document
    .getElementById("info-navigation-text")
    .addEventListener("click", (event) => {
      openTopic(event, "Info", "aboutme");
    });
  document
    .getElementById("contact-navigation-text")
    .addEventListener("click", (event) => {
      openTopic(event, "Contact", "aboutme");
    });
  //Mobile navigation tabs
  document
    .getElementById("experience-tab-mobile")
    .addEventListener("click", (event) => {
      openTopic(event, "Experience", "portfolio");
    });
  document
    .getElementById("techstack-tab-mobile")
    .addEventListener("click", (event) => {
      openTopic(event, "TechStack", "portfolio");
    });
  document
    .getElementById("projects-tab-mobile")
    .addEventListener("click", (event) => {
      openTopic(event, "Projects", "portfolio");
    });
  document
    .getElementById("education-tab-mobile")
    .addEventListener("click", (event) => {
      openTopic(event, "Education", "portfolio");
    });

  //Buttons to redirect client
  document.getElementById("tradium-btn").addEventListener("click", (event) => {
    location.href = "https://github.com/IsaacQ785/2023TAWebsite";
  });
  document
    .getElementById("load-grades-warwick-btn")
    .addEventListener("click", (event) => {
      showGrades(event);
    });
});

function showGrades(evt) {
  let tabcontent = document.getElementById("year-1");
  tabcontent.className = "flex-col";
  let tabcontent2 = document.getElementById("hidden-warwick-content");
  tabcontent2.className = "";
  evt.currentTarget.className += " hidden";
}

function openTopic(evt, topicName, section) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName(section + "_tabcontent");
  console.log(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName(section + "_tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " active";
}
