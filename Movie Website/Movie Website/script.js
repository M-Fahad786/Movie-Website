// Linking Of Tickets Page
const onMovie1 = () => {
  window.location.href = "../Movies/movie1.html";
};

const onMovie2 = () => {
  window.location.href = "../Movies/movie2.html";
};

const onMovie3 = () => {
  window.location.href = "../Movies/movie3.html";
};

const onMovie4 = () => {
  window.location.href = "../Movies/movie4.html";
};

const onMovie5 = () => {
  window.location.href = "../Movies/movie5.html";
};

const onMovie6 = () => {
  window.location.href = "../Movies/movie6.html";
};

const onMovie7 = () => {
  window.location.href = "../Movies/movie7.html";
};

const onMovie8 = () => {
  window.location.href = "../Movies/movie8.html";
};

const onMovie9 = () => {
  window.location.href = "../Movies/movie9.html";
};

const onMovie10 = () => {
  window.location.href = "../Movies/movie10.html";
};

const onMovie11 = () => {
  window.location.href = "../Movies/movie11.html";
};

const onMovie12 = () => {
  window.location.href = "../Movies/movie12.html";
};

// Sign Out Function
function signOut() {
  window.localStorage.removeItem("input_values");
  window.location.replace("../index.html");
}

// Scroll To Top Button
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Movies Page Function
const movie = () => {
  window.location = "projects.html";
};
