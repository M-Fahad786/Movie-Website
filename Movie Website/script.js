let movieName1 = [];
let movieName2 = [];
let movieName3 = [];
let movieName4 = [];

let movie1 = document.getElementById("movie-1");
let movie2 = document.getElementById("movie-2");
let movie3 = document.getElementById("movie-3");
let movie4 = document.getElementById("movie-4");
// let movie5 =
//   document.getElementById("movie-5");
// let movie6 =
//   document.getElementById("movie6");
// let movie7 =
//   document.getElementById("movie-7");
// let movie8 =
//   document.getElementById("movie-8");
// let movie9 =
//   document.getElementById("movie-9");
// let movie10 =
//   document.getElementById("movie-10");
// let movie11 =
//   document.getElementById("movie-11");
// let movie12 =
//   document.getElementById("movie-12")

function Movie1(movie1) {
  this.movie1 = movie1;
}
function onMovie1() {
  let movieValue1 = new Movie1(movie1.previousSibling.previousSibling.innerHTML);
   movieName1.push(movieValue1);
   let mov1 = JSON.stringify(movieName1);
   window.localStorage.setItem("movieName1", mov1);
}
function Movie2(movie2) {
  this.movie2 = movie2;
}
function onMovie2() {
  let movieValue2 = new Movie2(movie2.previousSibling.previousSibling.innerHTML);
   movieName2.push(movieValue2);
   let mov2 = JSON.stringify(movieName2);
   window.localStorage.setItem("movieName2", mov2);
}
function Movie3(movie1) {
  this.movie3 = movie1;
}

function onMovie3() {
  let movieValue3 = new Movie3(movie3.previousSibling.previousSibling.innerHTML);
   movieName3.push(movieValue3);
   let mov3 = JSON.stringify(movieName3);
   window.localStorage.setItem("movieName3", mov3);
}
function Movie4(movie4) {
  this.movie4 = movie4;
}

function onMovie4() {
  let movieValue4 = new Movie3(movie4.previousSibling.previousSibling.innerHTML);
   movieName4.push(movieValue4);
   let mov4 = JSON.stringify(movieName4);
   window.localStorage.setItem("movieName4", mov4);
}
